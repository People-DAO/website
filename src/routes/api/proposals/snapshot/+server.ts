import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { PROPOSALS_ENDPOINT_SNAPSHOT } from '$apps/proposals/constants/endpoints.constants';

type ProposalState = 'active' | 'pending' | 'closed' | null;

const getSnapshotProposals = async ({ state = null }: { state: ProposalState }) => {
	try {
		const proposals = await fetch(PROPOSALS_ENDPOINT_SNAPSHOT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
					query GetProposals(
						$state: String!
					) {
						proposals(
							first: 20,
							skip: 0,
							where: {
								space_in: ["people-dao.eth"],
								state: $state
							},
							orderBy: "created",
							orderDirection: desc
						) {
							id
							title
							# body
							# choices
							start
							end
							# snapshot
							state
							# author
							# space {
							#		id
							#		name
							# }
						}
					}
				`,
				operationName: 'GetProposals',
				variables: {
					state: state || ''
				}
			})
		});

		const result = await proposals.json();

		return result;
	} catch (err) {
		console.log('[@DEBUG] getSnapshotProposals - err: ', err);
		return { error: true };
	}
};

export const GET: RequestHandler = async ({ url }) => {
	try {
		const state = url.searchParams.get('state') as ProposalState;

		const proposals = await getSnapshotProposals({ state });

		if (proposals?.error) {
			return error(500);
		}

		return json(proposals?.data?.proposals, {
			status: 200
		});
	} catch (err) {
		console.log('[@DEBUG] err: ', err);
		return error(500);
	}
};
