<script lang="ts">
	interface Props {
		title: string;
		description: string;
		image?: string;
		tags?: string[];
		githubUrl?: string;
		deployUrl?: string;
		docsUrl?: string;
	}

	let { title, description, image, tags = [], githubUrl, deployUrl, docsUrl }: Props = $props();
</script>

<article class="group relative overflow-hidden rounded-2xl">
	<!-- Acrylic base -->
	<div class="absolute inset-0 bg-black/50 saturate-[180%] backdrop-blur-xl"></div>
	<div
		class="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/[0.06] via-white/[0.015] to-black/10"
	></div>
	<div
		class="absolute inset-0 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
	></div>
	<!-- Top shine -->
	<div
		class="absolute top-0 right-[5%] left-[5%] h-px bg-gradient-to-r from-transparent via-[#c8a96e]/35 to-transparent"
	></div>

	<div class="relative z-10 flex h-full flex-col">
		<!-- Image -->
		{#if image}
			<div class="relative h-44 w-full overflow-hidden">
				<img
					src={image}
					alt={title}
					class="h-full w-full bg-black object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
				/>
				<!-- Image bottom fade -->
				<div
					class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
				></div>
			</div>
		{:else}
			<!-- Placeholder when no image -->
			<div
				class="flex h-32 w-full items-center justify-center border-b border-white/5 bg-gradient-to-br from-white/[0.03] to-black/20"
			>
				<i class="bi bi-code-slash text-4xl text-[#c8a96e]/30"></i>
			</div>
		{/if}

		<!-- Content -->
		<div class="flex flex-1 flex-col gap-3 p-5">
			<!-- Title -->
			<h2
				class="m-0 leading-tight tracking-[0.04em]"
				style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(1.4rem, 3vw, 1.8rem);"
			>
				<span class="text-white">{title.slice(0, -1)}</span><span
					style="-webkit-text-stroke: 1.5px #c8a96e; color: transparent;">{title.slice(-1)}</span
				>
			</h2>

			<!-- Description -->
			<p class="m-0 line-clamp-3 font-mono text-xs leading-6 text-white/50">
				{description}
			</p>

			<!-- Tags -->
			{#if tags.length > 0}
				<div class="mt-1 flex flex-wrap gap-1.5">
					{#each tags as tag}
						<span
							class="rounded border border-[#c8a96e]/20 bg-[#c8a96e]/[0.06] px-2 py-0.5 font-mono
                                     text-[0.6rem] tracking-wider text-[#c8a96e]/80"
						>
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Spacer -->
			<div class="flex-1"></div>

			<!-- Links -->
			<div class="mt-1 flex items-center gap-2 border-t border-white/[0.06] pt-3">
				{#if githubUrl}
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3
                               py-1.5 font-mono text-[0.65rem] tracking-wider text-white/60
                               no-underline transition-all duration-200 hover:border-white/20 hover:text-white/90"
						aria-label="GitHub"
					>
						<i class="bi bi-github text-sm"></i>
						<span>Code</span>
					</a>
				{/if}

				{#if deployUrl}
					<a
						href={deployUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1.5 rounded-lg bg-[#c8a96e] px-3 py-1.5 font-mono
                               text-[0.65rem] tracking-wider text-black
                               no-underline transition-all duration-200 hover:bg-[#e0c48a]"
						aria-label="Live demo"
					>
						<i class="bi bi-box-arrow-up-right text-sm"></i>
						<span>Live</span>
					</a>
				{/if}

				{#if docsUrl}
					<a
						href={docsUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3
                               py-1.5 font-mono text-[0.65rem] tracking-wider text-white/60
                               no-underline transition-all duration-200 hover:border-[#c8a96e]/40 hover:text-[#c8a96e]"
						aria-label="Documentation"
					>
						<i class="bi bi-book text-sm"></i>
						<span>Docs</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</article>
