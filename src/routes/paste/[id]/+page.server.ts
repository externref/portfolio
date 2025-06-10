import { getPaste } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const paste = await getPaste(params.id);
	return { paste };
};
