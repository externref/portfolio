<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let dockVisible = $state(false);

	interface DockItem {
		id: string;
		type?: 'divider';
		icon?: string;
		label?: string;
		href?: string;
		external?: boolean;
		download?: boolean;
	}

	const items: DockItem[] = [
		{ id: 'home', icon: 'bi-house-fill', label: 'Home', href: '/' },
		{ id: 'project', icon: 'bi-code-slash', label: 'Projects', href: '/projects' },
		{ id: 'contact', icon: 'bi-chat-square-quote-fill', label: 'Contact', href: '/contact' },
		{
			id: 'resume',
			icon: 'bi-file-earmark-arrow-down-fill',
			label: 'Resume',
			href: '/resume.pdf',
			download: true
		},
		{ id: 'div1', type: 'divider' },
		{
			id: 'github',
			icon: 'bi-github',
			label: 'GitHub',
			href: 'https://github.com/externref',
			external: true
		},
		{
			id: 'linkedin',
			icon: 'bi-linkedin',
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/defsarthak',
			external: true
		},
		{ id: 'email', icon: 'bi-envelope-fill', label: 'Email', href: 'mailto:defsarthak@email.com' },
		{
			id: 'wakatime',
			icon: 'bi-clock-fill',
			label: 'WakaTime',
			href: 'https://wakatime.com/@externref',
			external: true
		}
	];

	let hoveredId = $state<string | null>(null);

	onMount(() => setTimeout(() => (dockVisible = true), 400));
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
	/>
</svelte:head>

<nav
	class="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center transition-all duration-700 ease-out"
	class:opacity-0={!dockVisible}
	class:translate-y-6={!dockVisible}
	class:opacity-100={dockVisible}
	class:translate-y-0={dockVisible}
	aria-label="Site navigation dock"
>
	<div class="pointer-events-auto relative">
		<div class="absolute inset-0 rounded-full bg-black/50 saturate-[180%] backdrop-blur-2xl"></div>
		<div
			class="absolute inset-0 rounded-full bg-gradient-to-br from-[#c8a96e]/[0.07] via-white/[0.02] to-black/10"
		></div>
		<div
			class="absolute top-0 right-[8%] left-[8%] h-px rounded-full bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent"
		></div>
		<div
			class="absolute inset-0 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.07)]"
		></div>

		<ul class="relative m-0 flex list-none items-center gap-0.5 px-4 py-1.5" role="list">
			{#each items as item}
				{#if item.type === 'divider'}
					<li
						class="mx-1.5 my-1 w-px flex-shrink-0 self-stretch bg-gradient-to-b from-transparent via-white/15 to-transparent"
						role="separator"
						aria-hidden="true"
					></li>
				{:else}
					<li
						class="relative flex flex-col items-center"
						onmouseenter={() => (hoveredId = item.id!)}
						onmouseleave={() => (hoveredId = null)}
						role="listitem"
					>
						<span
							class="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-10 -translate-x-1/2
                     rounded border border-[#c8a96e]/25 bg-black/90 px-2
                     py-0.5 font-mono text-[0.6rem] tracking-widest whitespace-nowrap
                     text-[#e8d5b0] backdrop-blur-sm transition-all duration-150
                     after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px]
                     after:border-transparent after:border-t-[rgba(200,169,110,0.3)] after:content-['']"
							class:opacity-0={hoveredId !== item.id}
							class:opacity-100={hoveredId === item.id}
							class:translate-y-1={hoveredId !== item.id}
							class:translate-y-0={hoveredId === item.id}
						>
							{item.label}
						</span>

						<a
							href={item.href}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noopener noreferrer' : undefined}
							download={item.download ? '' : undefined}
							class="relative flex h-9 w-9 items-center justify-center rounded-lg
                     text-white/60 no-underline"
							aria-label={item.label}
						>
							<i class="bi {item.icon} relative z-10 text-[1.1rem]" aria-hidden="true"></i>

							{#if $page.url.pathname === item.href}
								<span
									class="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#c8a96e] shadow-[0_0_5px_rgba(200,169,110,0.9)]"
								></span>
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>
