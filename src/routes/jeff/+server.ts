import { getRandomJeffImage } from '$lib';

export const GET = async () => {
	let imageUrl = getRandomJeffImage();
	const res = await fetch(imageUrl);
	if (!res.ok) {
		return new Response('Failed to fetch image', { status: 502 });
	}
	const contentType = res.headers.get('content-type') || 'image/jpeg';
	const buffer = await res.arrayBuffer();
	return new Response(buffer, {
		status: 200,
		headers: {
			'Content-Type': contentType,
			'Cache-Control': 'public, max-age=86400'
		}
	});
};
