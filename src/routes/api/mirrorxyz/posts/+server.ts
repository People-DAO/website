/* eslint-disable no-useless-escape */
// import fetch from 'isomorphic-unfetch';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import {
	API_ARWEAVE_GRAPHQL,
	API_ARWEAVE_TRANSACTION
} from '$apps/mirrorxyz/constants/apis.constants';
import { WALLET_MIRRORXYZ_PEOPLEDAO } from '$apps/mirrorxyz/constants/wallets.constants';
import { DOMAIN_MIRROXYZ_PEOPLEDAO } from '$apps/mirrorxyz/constants/domain.constants';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const postsList = await fetch(API_ARWEAVE_GRAPHQL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
					query GetMirrorTransactions($ownerAddress: String!, $afterCursor: String!) {
						transactions(
							tags:[
								{
									name:\"App-Name\",
									values:[\"MirrorXYZ\"]
								},
								{
									name:\"Contributor\",
									values:[$ownerAddress]
								}
							], 
							sort:HEIGHT_DESC,
							after: $afterCursor
						) {
							edges {
								cursor
								node {
									id
									tags {
										name
										value
									}
								}
							}
							pageInfo {
								hasNextPage
							}
						}
					}
				`,
				operationName: 'GetMirrorTransactions',
				variables: {
					ownerAddress: WALLET_MIRRORXYZ_PEOPLEDAO,
					afterCursor: url?.searchParams?.get('after') ?? ''
				}
			})
		});

		const postsListData = await postsList.json();

		if (!postsListData?.data?.transactions?.edges?.length) {
			return json(
				{
					items: [],
					meta: {
						hasNextPage: false
					}
				},
				{
					status: 200
				}
			);
		}

		const posts = [];

		for (const post of postsListData.data.transactions.edges) {
			const postTransaction = await fetch(`${API_ARWEAVE_TRANSACTION}/${post.node?.id}`);
			const postData = await postTransaction.json();

			const mirrrorId = post.node?.tags?.find(
				(t: { name: string; value: string }) => t.name === 'Original-Content-Digest'
			)?.value;

			posts.push({
				cursor: post.cursor,
				id: post.node?.id,
				timestamp: postData?.content?.timestamp,
				title: postData?.content?.title,
				mirrorxyzUrl: mirrrorId ? `${DOMAIN_MIRROXYZ_PEOPLEDAO}/${mirrrorId}` : null
			});
		}

		return json(
			{
				items: posts,
				meta: {
					hasNextPage: postsListData?.data?.transactions?.pageInfo?.hasNextPage
				}
			},
			{
				status: 200
			}
		);
	} catch (err) {
		console.log('[@DEBUG] err: ', err);
		return error(500);
	}
};
