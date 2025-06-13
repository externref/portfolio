<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { fetchGitHubStars } from '$lib/githubStars';

	let stars: Record<string, number | string> = {};

	const projects = [
		{
			title: 'Wyvern',
			description:
				'A Discord API wrapper written in Python, designed for building bots and automation with ease.',
			url: 'https://github.com/externref/wyvern',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			iconAlt: 'Python',
			repo: 'github.com/externref/wyvern',
			starKey: 'externref/wyvern'
		},
		{
			title: 'Aoi',
			description:
				'A simple SQLite wrapper for the terminal, making database management and queries easy from the command line.',
			url: 'https://github.com/externref/aoi',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			iconAlt: 'Python',
			repo: 'github.com/externref/aoi',
			starKey: 'externref/aoi'
		},
		{
			title: 'Glyph',
			description: 'A fast, minimal pastebin service for sharing code and text snippets online.',
			url: 'https://github.com/externref/glyph',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
			iconAlt: 'Svelte',
			repo: 'github.com/externref/glyph',
			starKey: 'externref/glyph'
		},
		{
			title: 'Synap',
			description:
				'A Neofetch-like application for fetching and displaying system information in the terminal.',
			url: 'https://github.com/externref/synap',
			icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg',
			iconAlt: 'Rust',
			repo: 'github.com/externref/synap',
			starKey: 'externref/synap'
		},
		{
			title: 'Macro',
			description:
				'A lightweight webserver framework for building fast and simple web applications.',
			url: 'https://github.com/externref/macro',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			iconAlt: 'Python',
			repo: 'github.com/externref/macro',
			starKey: 'externref/macro'
		},
		{
			title: 'Space',
			description: 'A JSON-based data storage system for simple and flexible data persistence.',
			url: 'https://github.com/externref/space',
			icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg',
			iconAlt: 'Rust',
			repo: 'github.com/externref/space',
			starKey: 'externref/space'
		},
		{
			title: 'Dawn',
			description:
				'A command handler for the Hikari library, making Discord bot command management easy and efficient.',
			url: 'https://github.com/externref/dawn',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			iconAlt: 'Python',
			repo: 'github.com/externref/dawn',
			starKey: 'externref/dawn'
		},
		{
			title: 'MarvelRivalsAPI',
			description:
				'A Python API wrapper for Marvel Rivals, providing easy access to game data and stats for bots, tools, and integrations.',
			url: 'https://github.com/externref/marvelrivalsapi',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			iconAlt: 'Python',
			repo: 'github.com/externref/marvelrivalsapi',
			starKey: 'externref/marvelrivalsapi'
		}
	];

	onMount(async () => {
		stars = await fetchGitHubStars(projects.map((p) => p.starKey));
	});
</script>

<section id="projects" class="mx-auto my-12 max-w-7xl px-4">
	<h2 class="text-primary mb-4 text-center text-2xl font-bold sm:text-3xl">Projects</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<a
				href={project.url}
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img src={project.icon} alt={project.iconAlt} class="h-6 w-6" />
					<h3 class="text-primary text-lg font-semibold">{project.title}</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					{project.description}
				</p>
				<span class="text-base-content/60 text-xs">{project.repo}</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars[project.starKey] ?? '—'}
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
