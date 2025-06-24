export type ActivityData = {
	username: string;
	avatar_url: string;
	status: 'online'| 'offline'|'idle'| 'dnd'|'do_not_disturb'| 'invisible'| 'streaming',
	activity: {
		custom?: {
			value: string;
			emoji?: string | null;
		} | null;
		playing?: {
			name: string;
			details?: string | null;
			url?: string | null;
			large_image_url?: string | null;
			small_image_url?: string | null;
			state?: string | null;
			timestamps: {
				start?: string | null;
				end?: string | null;
			};
		} | null;
		listening?: {
			album: string;
			album_cover_url: string;
			artist: string;
			artists: string[];
			color?: string | null;
			colour?: string | null;
			created_at?: string | null;
			duration: number;
			end?: string | null;
			large_image_text?: string | null;
			large_image_url: string;
			name: string;
			party_id?: string | null;
			small_image_text?: string | null;
			small_image_url: string;
			start?: string | null;
			title?: string | null;
			track_id: string;
			track_url: string;
			type?: string | null;
		} | null;
		spotify?: any | null;
	};
};
