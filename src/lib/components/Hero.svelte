<script>
	import { onMount } from 'svelte';

	import StackMarquee from '$lib/components/StackMarquee.svelte';

	let visible = $state(false);
	let textVisible = $state(false);
	let subtitleVisible = $state(false);

	onMount(() => {
		setTimeout(() => (visible = true), 200);
		setTimeout(() => (textVisible = true), 900);
		setTimeout(() => (subtitleVisible = true), 1300);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css" />
</svelte:head>
<section class="hero-shell">
	<div class="hero-scanlines" aria-hidden="true"></div>
	<div class="hero-grain" aria-hidden="true"></div>

	<div class="hero-logo" class:hero-logo--in={visible} aria-hidden="true">/home/externref</div>

	<div class="hero-content" class:hero-content--in={textVisible}>
		<p class="hero-label">// portfolio</p>
		<h1 class="hero-title">externref</h1>
		<p class="hero-sub" class:hero-sub--in={subtitleVisible}>
			Hi, I'm Sarthak - a python, typescript and web developer.<br />Interested in backend,
			databases and application development.
		</p>
		<div class="hero-cta-row" class:hero-cta-row--in={subtitleVisible}>
			<a href="/projects" class="hero-btn-primary">View Work</a>
			<a href="/contact" class="hero-btn-ghost">Get in touch →</a>
		</div>
		<br /> <br />
		<StackMarquee />
		<br />
		<div class="w-fit rounded-lg bg-black/30 py-1.5 backdrop-blur-xl">
			<div class="flex items-center gap-2">
				<span class="text-sm text-white/70">made with</span>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
					<path
						class="text-red-500"
						fill="currentColor"
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/>
				</svg>
				<span class="text-sm text-white/70">and</span>
				<i class="devicon-svelte-plain colored text-base"></i>
				<span class="text-sm font-medium text-white">Svelte</span>
			</div>
		</div>
	</div>

	<div class="hero-char-wrap" class:hero-char-wrap--in={visible}>
		<img src="/jotaro.png" alt="Character silhouette" class="hero-char-img" aria-hidden="true" />
		<div class="hero-char-fade"></div>
		<div class="hero-glitch-line hero-glitch-line-1" aria-hidden="true"></div>
		<div class="hero-glitch-line hero-glitch-line-2" aria-hidden="true"></div>
	</div>

	<div class="hero-accent-bar" class:hero-accent-bar--in={subtitleVisible} aria-hidden="true"></div>
</section>
