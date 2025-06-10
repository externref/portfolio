import { GITHUB_TOKEN } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { repos } = await request.json();
	if (!Array.isArray(repos)) {
		return new Response(JSON.stringify({ error: 'Invalid repos' }), { status: 400 });
	}

	const results: Record<string, number> = {};

	await Promise.all(
		repos.map(async (repo) => {
			try {
				const res = await fetch(`https://api.github.com/repos/${repo}`, {
					headers: {
						Accept: 'application/vnd.github+json',
						...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {})
					}
				});
				if (!res.ok) throw new Error('Failed to fetch');
				const data = await res.json();
				results[repo] = data.stargazers_count || 0;
			} catch (e) {
				results[repo] = 0;
			}
		})
	);
	return new Response(JSON.stringify(results), { status: 200 });
};
