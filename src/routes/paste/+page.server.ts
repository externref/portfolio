import { createPaste, getPaste, deletePaste } from '$lib/supabase';
import { type Actions, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const author = formData.get('author')?.toString() || 'anonymous';
		const content = formData.get('content')?.toString() || '';
		const language = formData.get('language')?.toString() || 'plaintext';

		if (!content) {
			return { error: 'Content is required' };
		}

		try {
			const paste = await createPaste({ author, content, language });

			return {
				paste_id: paste.id
			};
		} catch (error) {
			return { error: error instanceof Error ? error.message : String(error) };
		}
	}
} satisfies Actions;
