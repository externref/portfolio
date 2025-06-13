import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'] })],
	kit: { adapter: adapter(), csrf: { checkOrigin: false } },
	extensions: ['.svelte', '.svx']
};

export default config;
