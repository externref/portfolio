<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();
	let theme: string = $state('dim');

	let header = $state('');
	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme');
			theme = savedTheme ? savedTheme : 'dim';
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
		<a href="/" aria-label="Home" class="flex items-center gap-2">
			<img src="/icon.png" alt="icon" class="h-10 w-10" />
			<span class="text-primary text-3xl font-extrabold tracking-tight">externref</span>
		</a>
	</div>
	<!-- Desktop nav -->
	<div class="hidden flex-1 justify-center gap-6 text-lg font-medium md:flex">
		<a href="/#projects" class="hover:text-primary transition-colors">Projects</a>
		<a href="/blogs" class="hover:text-primary transition-colors">Blogs</a>
		<a href="/paste" class="hover:text-primary transition-colors">Paste</a>
		<a href="/stats" class="hover:text-primary transition-colors">Stats</a>
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
				<a
					href="/#"
					class="hover:text-primary w-full text-center transition-colors"
					onclick={() => {
						(document.getElementById('nav-toggle') as HTMLInputElement).checked = false;
					}}>Projects</a
				>
				<a
					href="/blogs"
					class="hover:text-primary w-full text-center transition-colors"
					onclick={() => {
						(document.getElementById('nav-toggle') as HTMLInputElement).checked = false;
					}}>Blogs</a
				>
				<a
					href="/paste"
					class="hover:text-primary w-full text-center transition-colors"
					onclick={() => {
						(document.getElementById('nav-toggle') as HTMLInputElement).checked = false;
					}}>Paste</a
				>
				<a
					href="/stats"
					class="hover:text-primary w-full text-center transition-colors"
					onclick={() => {
						(document.getElementById('nav-toggle') as HTMLInputElement).checked = false;
					}}>Stats</a
				>
			</div>
		</div>
	</div>
</nav>
<div class="flex min-h-screen flex-col" data-theme={theme}>
	<div class="flex-1 p-4">{@render children()}</div>
	<footer
		id="contact"
		class="text-base-content bg-base-100 mt-8 w-full border-t py-8 text-center text-sm"
	>
		<div class="flex flex-col items-center gap-2">
			<div class="mb-2 flex flex-wrap justify-center gap-3 text-base">
				<a
					href="https://github.com/externref"
					target="_blank"
					rel="noopener"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-github"></i></span
					>
					<span class="hidden sm:inline">GitHub</span>
				</a>
				<a
					href="https://instagram.com/defsarthak"
					target="_blank"
					rel="noopener"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-instagram"></i></span
					>
					<span class="hidden sm:inline">Instagram</span>
				</a>
				<a
					href="https://discord.com/users/1134016724132446208"
					target="_blank"
					rel="noopener"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-discord"></i></span
					>
					<span class="hidden sm:inline">Discord</span>
				</a>
				<a
					href="https://linkedin.com/in/defsarthak"
					target="_blank"
					rel="noopener"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-linkedin"></i></span
					>
					<span class="hidden sm:inline">LinkedIn</span>
				</a>
				<a
					href="mailto:defsarthak@gmail.com"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-envelope"></i></span
					>
					<span class="hidden sm:inline">Email</span>
				</a>
				<a
					href="https://steamcommunity.com/id/externref"
					target="_blank"
					rel="noopener"
					class="group hover:text-primary flex items-center gap-2 transition-colors duration-200"
				>
					<span class="bg-base-200 group-hover:bg-primary/10 rounded-full p-2 transition-colors"
						><i class="bi bi-steam"></i></span
					>
					<span class="hidden sm:inline">Steam</span>
				</a>
			</div>
			<div class="flex flex-wrap justify-center gap-2 text-xs opacity-70">
				<span
					>&copy; {new Date().getFullYear()}
					<span class="text-primary font-semibold">externref</span>. All rights reserved.</span
				>
				<span>|</span>
				<span
					>Built using <a
						href="https://svelte.dev"
						target="_blank"
						rel="noopener"
						class="hover:text-primary underline">SvelteKit</a
					>
					&amp;
					<a
						href="https://tailwindcss.com"
						target="_blank"
						rel="noopener"
						class="hover:text-primary underline">TailwindCSS</a
					></span
				> with 💖
			</div>
		</div>
	</footer>
</div>
