import { updatePresenceData, getPresenceData } from '$lib/supabase';
import { json } from '@sveltejs/kit';
export const POST = async ({ request }: { request: Request }) => {
	const body = await request.json();
	await updatePresenceData(body);
	return Response.json({
		status: 'success'
	});
};

export const GET = async () => {
	return json((await getPresenceData()).data);
};
