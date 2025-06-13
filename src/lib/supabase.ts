import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface Paste {
	id: string;
	language: string;
	content: string;
	author: string;
	created_at: Date;
	delete_code: string;
}

function generateCode(length: number): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

export async function createPaste(
	paste: Omit<Paste, 'id' | 'created_at' | 'delete_code'>
): Promise<Paste> {
	const { data, error } = await client
		.from('pastes')
		.insert({
			...paste,
			id: generateCode(4),
			created_at: new Date(),
			delete_code: generateCode(16)
		})
		.select()
		.single();

	if (error) {
		throw new Error(`Failed to create paste: ${error.message}`);
	}

	return data as Paste;
}

export async function getPaste(id: string): Promise<Paste | null> {
	const { data, error } = await client.from('pastes').select('*').eq('id', id).single();

	if (error) {
		if (error.code === 'PGRST116') {
			return null;
		}
		throw new Error(`Failed to fetch paste: ${error.message}`);
	}

	return data as Paste;
}

export async function deletePaste(id: string, deleteCode: string): Promise<void> {
	const { data, error } = await client
		.from('pastes')
		.delete()
		.eq('id', id)
		.eq('delete_code', deleteCode)
		.select()
		.single();

	if (error) {
		if (error.code === 'PGRST116') {
			throw new Error('Paste not found or delete code incorrect');
		}
		throw new Error(`Failed to delete paste: ${error.message}`);
	}

	if (!data) {
		throw new Error('Paste not found or delete code incorrect');
	}
}

export async function getPresenceData(): Promise<any> {
	const { data, error } = await client.from('discord_presence').select('data').limit(1).single();

	if (error) {
		throw new Error(`Failed to fetch presence data: ${error.message}`);
	}

	return data;
}

export async function updatePresenceData(data: any): Promise<void> {
	const { error } = await client
		.from('discord_presence')
		.update({ data })
		.eq('id', 1)
		.select()
		.single();

	if (error) {
		throw new Error(`Failed to update presence data: ${error.message}`);
	}
}
