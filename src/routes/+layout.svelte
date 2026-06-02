<script lang="ts">
	import './layout.css';

	import 'bootstrap-icons/font/bootstrap-icons.min.css';
	import 'devicon/devicon.min.css';
	import favicon from '$lib/assets/icon.svg';
	import Dock from '$lib/components/Dock.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<Dock />
