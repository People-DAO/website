/* eslint-disable no-useless-escape */
// import fetch from 'isomorphic-unfetch';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import {
	API_ARWEAVE_GRAPHQL,
	API_ARWEAVE_TRANSACTION
} from '$apps/mirrorxyz/constants/apis.constants';
import {
	WALLETS_MIRRORXYZ_AUTHORS,
	WALLET_MIRRORXYZ_PEOPLEDAO
} from '$apps/mirrorxyz/constants/wallets.constants';

const getMirrorTransactions = async ({ after = '', limit = 25, ignoredMirrorIds = [''] }) => {
	try {
		const transactions = await fetch(API_ARWEAVE_GRAPHQL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
					query GetMirrorTransactions(
						$authorsAddresses: [String!]!, 
						$limit: Int!, 
						$afterCursor: String!, 
						$ignoredMirrorIds: [String!]!
					) {
						transactions(
							tags:[
								{
									name: "App-Name",
									values: ["MirrorXYZ"]
								},
								{
									name: "Contributor",
									values: $authorsAddresses
								},
								{
									name: "Original-Content-Digest"
									values: $ignoredMirrorIds
									op: NEQ
								}
							], 
							sort:HEIGHT_DESC,
							first: $limit,
							after: $afterCursor,
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
					authorsAddresses: WALLETS_MIRRORXYZ_AUTHORS,
					limit,
					afterCursor: after,
					ignoredMirrorIds
				}
			})
		});

		const result = await transactions.json();

		if (result?.errors?.length) {
			console.log('[@DEBUG] getMirrorTransactions - result.errors: ', result.errors);
			return { error: true };
		}

		return result;
	} catch (err) {
		console.log('[@DEBUG] getMirrorTransactions - err: ', err);
		return { error: true };
	}
};

const getTransactionData = async (nodeId: string) => {
	try {
		const postTransaction = await fetch(`${API_ARWEAVE_TRANSACTION}/${nodeId}`);

		if (postTransaction.status === 200) {
			return await postTransaction.json();
		}

		return {};
	} catch (err) {
		console.log('[@DEBUG] getTransactionData - err: ', err);
		return { error: true };
	}
};

const returnPosts = ({ posts, hasNextPage }: { posts: any[]; hasNextPage: boolean }) => {
	return json(
		{
			items: posts,
			meta: {
				hasNextPage
			}
		},
		{
			status: 200
		}
	);
};

export const GET: RequestHandler = async ({ url }) => {
	try {
		const afterCursor = url?.searchParams?.get('after') || undefined;
		const limit = Math.min(Number(url?.searchParams?.get('take') || 10), 25);
		const ignoredMirrorIds = url?.searchParams?.get('ignoredIds') || undefined;

		let lastCursor = afterCursor;
		let hasNextPage = true;
		const postsIdCache: string[] = [];
		const posts: any[] = [];

		while (posts.length < limit) {
			if (!hasNextPage) break;

			const transactionsQuery = await getMirrorTransactions({
				after: lastCursor,
				limit: limit * 3,
				ignoredMirrorIds:
					ignoredMirrorIds != undefined
						? decodeURIComponent(ignoredMirrorIds).split(',')
						: undefined
			});

			if (transactionsQuery?.error) {
				return error(500);
			}
			if (!transactionsQuery?.data?.transactions?.edges?.length) {
				return returnPosts({ posts, hasNextPage: false });
			}
			hasNextPage = transactionsQuery.data?.transactions?.pageInfo?.hasNextPage; // @TODO: improve

			for (const transaction of transactionsQuery.data.transactions.edges) {
				if (posts.length >= limit) {
					break;
				}

				const postId = transaction.node?.tags?.find(
					(t: { name: string; value: string }) => t.name === 'Original-Content-Digest'
				)?.value;

				if (postsIdCache.indexOf(postId) > -1) {
					continue;
				}

				const postData = await getTransactionData(transaction.node?.id);

				if (postData.error) {
					return error(500);
				}

				lastCursor = transaction.cursor;

				if (postData?.wnft?.fundingRecipient !== WALLET_MIRRORXYZ_PEOPLEDAO) {
					continue;
				}

				postsIdCache.push(postId);
				posts.push({
					cursor: transaction.cursor,
					id: postId,
					timestamp: postData?.content?.timestamp,
					title: postData?.content?.title
				});
			}
		}

		return returnPosts({
			posts,
			hasNextPage
		});
	} catch (err) {
		console.log('[@DEBUG] err: ', err);
		return error(500);
	}
};
