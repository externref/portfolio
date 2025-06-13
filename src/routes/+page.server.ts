import { getPresenceData } from '$lib/supabase';

export const load = async () => {
	return (await getPresenceData()).data;
};
