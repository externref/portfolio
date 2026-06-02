<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	interface Project {
		title: string;
		description: string;
		image?: string;
		tags?: string[];
		githubUrl?: string;
		deployUrl?: string;
		docsUrl?: string;
	}

	const projects: Project[] = [
		{
			title: 'reverb',
			description:
				'spotify analysis platform using spotify API with profile analysis and playlist recommendation generation',
			image: 'projects/reverb.png',
			tags: ['svelte-kit', 'spotify api', 'tailwindcss'],
			githubUrl: 'https://github.com/externref/reverb/tree/master',
			deployUrl: 'https://reverb.externref.dev'
		},
		{
			title: 'glyph',
			description: 'pastebin service for code snippet and text sharing with syntax highlighting',
			image: '/projects/glyph.png',
			tags: ['rust', 'rocket.rs', 'tailwindcss', 'postgresql'],
			githubUrl: 'https://github.com/externref/glyph',
			deployUrl: 'https://glyph.externref.dev'
		},
		{
			title: 'wyvern',
			description: 'A short description of what this project does and the problem it solves.',
			image: '/projects/wyvern.png',
			tags: ['python', 'discord-api-v10', 'library', 'async', 'aiohttp'],
			githubUrl: 'https://github.com/externref/wyvern',
			docsUrl: 'https://wyvern.readthedocs.io/en/latest/'
		}
	];
</script>

<svelte:head>
	<title>/home/externref/projects</title>
</svelte:head>

<div class="projects-bg-wrap md:hidden" class:projects-bg-wrap--in={visible}>
	<img src="/jolyne_eyes.png" alt="" class="projects-bg-img bg-black" aria-hidden="true" />
	<div class="projects-bg-fade"></div>
</div>

<div
	class="fixed inset-x-0 top-16 bottom-0 z-0 hidden bg-black transition-opacity duration-700 ease-out md:block"
	class:opacity-0={!visible}
	class:opacity-100={visible}
>
	<img
		src="/jolyne_eyes.png"
		alt=""
		class="h-full w-full bg-black object-cover object-center"
		aria-hidden="true"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
</div>

<div class="hero-logo" class:hero-logo--in={visible} aria-hidden="true">
	/home/externref/projects
</div>

<div class="relative z-10 flex min-h-screen flex-col px-6 pt-50 pb-24 lg:px-12 lg:pt-32">
	<h1
		class="mb-10 translate-y-2 opacity-0 transition-all duration-700 ease-out"
		class:translate-y-0={visible}
		class:opacity-100={visible}
		style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 8vw, 7rem); line-height: 1; letter-spacing: 0.04em; transition-delay: 100ms;"
	>
		<span class="text-white">Pro</span><span
			style="-webkit-text-stroke: 2px #c8a96e; color: transparent;">jects</span
		>
	</h1>

	<div class="relative z-10 flex-1">
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each projects as project, i}
				<div
					class="translate-y-4 opacity-0 transition-all duration-700 ease-out"
					class:translate-y-0={visible}
					class:opacity-100={visible}
					style="transition-delay: {200 + i * 100}ms;"
				>
					<ProjectCard
						title={project.title}
						description={project.description}
						image={project.image}
						tags={project.tags}
						githubUrl={project.githubUrl}
						deployUrl={project.deployUrl}
						docsUrl={project.docsUrl}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
