<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();
	let theme: string = $state('dim');

	let header = $state('');
	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') || 'nord';
			theme = savedTheme;
		}
		typewriter();
	});
	const setTheme = (newTheme: string) => {
		theme = newTheme;
		localStorage.setItem('theme', newTheme);
	};

	function typewriter() {
		if (header.length != 'externref_'.length) {
			header += 'externref_'.at(header.length);
			setTimeout(typewriter, 100);
		}
	}
</script>

<nav
	data-theme={theme}
	class="bg-base-100 sticky top-0 z-50 flex items-center justify-between px-4 py-3 shadow md:px-6"
>
	<div class="flex flex-1 items-center gap-2">
		<a href="/" aria-label="Home">
			<span class="text-primary text-3xl font-extrabold tracking-tight">externref_</span>
		</a>
	</div>
	<!-- Desktop nav -->
	<div class="hidden flex-1 justify-center gap-6 text-lg font-medium md:flex">
		<a href="/#" class="hover:text-primary transition-colors">Projects</a>
		<a href="/blogs" class="hover:text-primary transition-colors">Blogs</a>
		<a href="#contact" class="hover:text-primary transition-colors">Contact</a>
	</div>
	<div class="flex flex-1 items-center justify-end gap-2">
		<!-- Theme toggle button -->
		<button
			class="btn btn-ghost btn-circle text-2xl"
			aria-label="theming"
			onclick={() => {
				setTheme(theme == 'dim' ? 'nord' : 'dim');
			}}
		>
			<i class="bi {theme == 'nord' ? 'bi-brightness-high-fill' : 'bi-moon-stars-fill'}"></i>
		</button>
		<!-- Mobile menu button -->
		<div class="md:hidden">
			<input id="nav-toggle" type="checkbox" class="peer hidden" />
			<label for="nav-toggle" class="btn btn-ghost btn-circle cursor-pointer text-2xl">
				<i class="bi bi-list"></i>
			</label>
			<div
				class="bg-base-100 absolute top-full right-0 z-40 hidden w-56 flex-col items-center gap-4 rounded-b-2xl py-4 shadow-md peer-checked:flex"
			>
				<a href="/#" class="hover:text-primary w-full text-center transition-colors">Projects</a>
				<a href="/blogs" class="hover:text-primary w-full text-center transition-colors">Blogs</a>
				<a href="/#contact" class="hover:text-primary w-full text-center transition-colors"
					>Contact</a
				>
			</div>
		</div>
	</div>
</nav>
<div class="flex min-h-screen flex-col" data-theme={theme}>
	<div class="flex-1 p-4">{@render children()}</div>
	<footer class="text-base-content bg-base-100 w-full border-t py-6 text-center text-sm">
		&copy; {new Date().getFullYear()} externref. All rights reserved.
		<div id="contact" class="mt-2 flex flex-wrap justify-center gap-4 text-base">
			<a
				href="https://github.com/externref"
				target="_blank"
				rel="noopener"
				class="hover:text-primary flex items-center gap-1"><i class="bi bi-github"></i>GitHub</a
			>
			<a
				href="https://instagram.com/defsarthak"
				target="_blank"
				rel="noopener"
				class="hover:text-primary flex items-center gap-1"
				><i class="bi bi-instagram"></i>Instagram</a
			>
			<a
				href="https://discord.com/users/externref"
				target="_blank"
				rel="noopener"
				class="hover:text-primary flex items-center gap-1"><i class="bi bi-discord"></i>Discord</a
			>
			<a
				href="https://linkedin.com/in/defsarthak"
				target="_blank"
				rel="noopener"
				class="hover:text-primary flex items-center gap-1"><i class="bi bi-linkedin"></i>LinkedIn</a
			>
			<a href="mailto:defsarthak@gmail.com" class="hover:text-primary flex items-center gap-1"
				><i class="bi bi-envelope"></i>Email</a
			>
		</div>
	</footer>
</div>
