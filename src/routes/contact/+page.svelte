<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});
</script>

<div class="hero-logo" class:hero-logo--in={visible} aria-hidden="true">
	/home/externref/contact
</div>
<div class="relative z-10 flex min-h-screen flex-col px-6 pt-50 pb-24 lg:px-12 lg:pt-32">hello</div>
