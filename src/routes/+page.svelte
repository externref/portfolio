<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Projects from '$lib/components/Projects.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Discord from '$lib/components/Discord.svelte';
	import type { ActivityData } from '$lib/$types';
	let { data } = $props();

	let transition = $state(false);

	const updatePresenceDataTask = async () => {
		const res = await fetch(`/api/update_discord`);
		data = await res.json();
	};

	onMount(() => {
		transition = true;
		const interval = setInterval(updatePresenceDataTask, 15000);
		return () => clearInterval(interval);
	});

	onMount(() => {
		transition = true;
	});
</script>

{#if transition}
	<section
		class="bg-base-100 dark:bg-base-200 flex min-h-[60vh] flex-col items-center justify-center py-12 text-center md:flex-row md:justify-center md:gap-16 md:text-left"
		in:fade={{ duration: 600 }}
		out:fade={{ duration: 400 }}
	>
		<div
			class="flex flex-1 flex-col items-center md:items-start md:justify-center md:pl-16 xl:pl-32"
		>
			<h1
				class="text-primary mb-4 text-3xl font-extrabold transition-all duration-500 hover:scale-105 sm:text-4xl md:text-5xl"
			>
				Hi, I'm <span class="inline-block transition-transform duration-500 hover:scale-110"
					>Sarthak</span
				>
			</h1>
			<p
				class="text-base-content dark:text-base-content/80 mx-auto mb-6 max-w-xl text-base transition-opacity duration-500 hover:opacity-90 sm:text-lg md:mx-0 md:text-xl"
			>
				I'm a developer who enjoys building, automating, and scripting with Python, Rust, and web
				technologies. I care about open source and the command line, and I like to keep things
				efficient—but when the work is done, you'll probably catch me gaming.
			</p>
			<div class="mb-2 flex flex-wrap justify-center gap-4 md:justify-start">
				<a
					href="https://github.com/externref"
					target="_blank"
					rel="noopener"
					class="btn btn-ghost flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
					><i class="bi bi-github"></i>GitHub</a
				>
				<a
					href="https://steamcommunity.com/id/externref"
					target="_blank"
					rel="noopener"
					class="btn btn-ghost flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
					><i class="bi bi-steam"></i>Steam</a
				>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener"
					class="btn btn-primary flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
				>
					<i class="bi bi-file-earmark-person"></i>
					Resume
				</a>
			</div>
		</div>
		<div
			class="mt-8 flex w-full flex-1 justify-center px-2 sm:px-4 md:mt-0 md:w-[40vw] md:max-w-2xl md:justify-end"
		>
			<Discord bind:data={data as ActivityData} />
		</div>
	</section>
	<Stack />
	<Projects />
{/if}

<svelte:head>
	<title>/home/externref</title>
	<meta content="externref" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
