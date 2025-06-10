export const fetchGitHubStars = async (repos: string[]): Promise<Record<string, number>> => {
	const res = await fetch('/api/get_stars', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ repos })
	});
	if (!res.ok) return Object.fromEntries(repos.map((r) => [r, 0]));
	return await res.json();
};
