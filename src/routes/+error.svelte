<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import catzilla from '$lib/assets/background/catzilla.png';
	import catzillaPhone from '$lib/assets/background/catzilla_phone.png';

	let visible = $state(false);
	let textVisible = $state(false);

	onMount(() => {
		setTimeout(() => (visible = true), 100);
		setTimeout(() => (textVisible = true), 700);
	});
</script>

<svelte:head>
	<title>/home/externref/error</title>
</svelte:head>

<div
	class="pointer-events-none fixed inset-0 z-10"
	style="background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px);"
	aria-hidden="true"
></div>

{#if $page.status === 404}
	<div
		class="fixed right-0 top-0 z-0 h-dvh transition-all duration-1000 ease-out md:hidden"
		style="opacity: {visible ? 1 : 0}; transform: translateX({visible ? '0' : '4rem'}); transition-timing-function: cubic-bezier(0.16,1,0.3,1);"
	>
		<img
			src={catzillaPhone}
			alt=""
			aria-hidden="true"
			class="block h-full w-auto max-w-none"
			style="filter: contrast(1.1) brightness(0.7) grayscale(0.2);"
		/>
		<div class="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent"></div>
		<div class="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-black/60"></div>
	</div>

	<div
		class="fixed right-0 bottom-0 z-0 hidden transition-all duration-1000 ease-out md:block"
		style="opacity: {visible ? 1 : 0}; transform: translateX({visible ? '0' : '4rem'}); transition-timing-function: cubic-bezier(0.16,1,0.3,1);"
	>
		<img
			src={catzilla}
			alt=""
			aria-hidden="true"
			class="block h-dvh w-auto max-w-none"
			style="filter: contrast(1.1) brightness(0.7) grayscale(0.2);"
		/>
		<div class="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent"></div>
		<div class="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-black/60"></div>
	</div>
{/if}

<div class="hero-logo" class:hero-logo--in={visible} aria-hidden="true">/home/externref/error</div>

<div class="relative z-10 flex min-h-screen items-center">
	<div class="w-full pr-6 pl-[8%] lg:pl-[12%]">
		<p
			class="mb-3 font-mono text-xs tracking-[0.3em] text-[#c8a96e] uppercase transition-all duration-600 ease-out"
			class:opacity-0={!textVisible}
			class:opacity-100={textVisible}
			class:translate-x-12={!textVisible}
			class:translate-x-0={textVisible}
			style="transition-delay: 0ms;"
		>
			// error
		</p>

		<h1
			class="mb-0 leading-none tracking-[0.04em] transition-all duration-700 ease-out"
			class:opacity-0={!textVisible}
			class:opacity-100={textVisible}
			class:translate-x-16={!textVisible}
			class:translate-x-0={textVisible}
			style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(6rem, 18vw, 14rem); transition-delay: 80ms;"
		>
			<span class="text-white">{String($page.status).slice(0, 2)}</span><span
				style="-webkit-text-stroke: 3px #c8a96e; color: transparent;"
				>{String($page.status).slice(2)}</span
			>
		</h1>

		<div
			class="mb-6 h-px bg-linear-to-r from-[#c8a96e]/60 to-transparent transition-all duration-700 ease-out"
			class:w-0={!textVisible}
			class:w-48={textVisible}
			style="transition-delay: 200ms;"
		></div>

		<p
			class="mb-10 max-w-sm font-mono text-sm leading-7 text-white/50 transition-all duration-700 ease-out"
			class:opacity-0={!textVisible}
			class:opacity-100={textVisible}
			class:translate-x-8={!textVisible}
			class:translate-x-0={textVisible}
			style="transition-delay: 260ms;"
		>
			{$page.error?.message ?? 'Something went wrong.'}
		</p>

		<div
			class="flex items-center gap-6 transition-all duration-700 ease-out"
			class:opacity-0={!textVisible}
			class:opacity-100={textVisible}
			class:translate-x-8={!textVisible}
			class:translate-x-0={textVisible}
			style="transition-delay: 340ms;"
		>
			<a
				href="/"
				class="bg-[#c8a96e] px-8 py-3 font-mono text-xs font-bold tracking-[0.15em] text-black uppercase
                       no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0c48a]"
			>
				Go Home
			</a>
			<button
				onclick={() => history.back()}
				class="cursor-pointer border-b border-white/30 bg-transparent pb-0.5 font-mono text-xs tracking-widest
                       text-white uppercase transition-all duration-200 hover:border-[#c8a96e] hover:text-[#c8a96e]"
			>
				← Go Back
			</button>
		</div>
	</div>
</div>

<div
	class="fixed bottom-0 left-0 z-20 h-px bg-linear-to-r from-[#c8a96e] to-transparent transition-[width] duration-1200 ease-out"
	class:w-0={!textVisible}
	class:w-[50%]={textVisible}
	style="transition-delay: 500ms;"
></div>