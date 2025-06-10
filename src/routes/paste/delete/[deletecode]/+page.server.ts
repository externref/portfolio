import { deletePaste } from '$lib/supabase';
import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
	default: async ({ params }) => {
		try {
			await deletePaste(params.deletecode, params.deletecode);
			return { success: true };
		} catch (error) {
			return { error: error instanceof Error ? error.message : String(error) };
		}
	}
};

export const load: PageServerLoad = async () => {
	return {};
};
