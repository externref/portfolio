<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import Prism from 'prismjs';

	import 'prism-themes/themes/prism-nord.css';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-rust';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-typescript';
	export let data;
	let highlighted = '';
	let codeElement: HTMLElement | null = null;

	function highlightCode() {
		if (data?.paste?.content && data?.paste?.language) {
			console.log(data.paste.language);
			try {
				highlighted = Prism.highlight(
					data.paste.content,
					Prism.languages[data.paste.language] || Prism.languages.plaintext,
					data.paste.language
				);
			} catch (e) {
				highlighted = Prism.highlight(data.paste.content, Prism.languages.plaintext, 'plaintext');
			}
			if (codeElement) codeElement.innerHTML = highlighted;
		}
	}

	onMount(highlightCode);
	afterUpdate(highlightCode);
</script>

{#if data?.paste}
	<div class="mx-auto max-w-5xl p-4">
		<h1 class="text-primary mb-2 text-2xl font-bold">Paste: {data.paste.id}</h1>
		<div class="text-base-content/60 mb-2 text-xs">
			<strong>Author:</strong>
			{data.paste.author} &nbsp;|&nbsp;
			<strong>Language:</strong>
			{data.paste.language}
		</div>
		<div class="relative">
			<button
				on:click={() => navigator.clipboard.writeText((data.paste || { content: `eh` }).content)}
				class="btn btn-xs btn-outline btn-primary absolute top-2 right-2 z-10"
				title="Copy code to clipboard"
				type="button"
			>
				<i class="bi bi-clipboard"></i> Copy
			</button>
			<pre
				class="bg-base-200 w-full max-w-full min-w-0 overflow-x-auto rounded-xl p-4 font-mono text-xs whitespace-pre-wrap sm:text-sm md:text-base lg:text-lg xl:text-base"><code
					class="language-{data.paste.language}"
					bind:this={codeElement}></code></pre>
		</div>
	</div>
{:else}
	<div class="alert alert-error mx-auto mt-8 max-w-2xl">Paste not found.</div>
{/if}

<svelte:head>
	<title>paste: {(data.paste || {}).id}</title>
	<meta content="paste: {(data.paste || {}).id}" property="og:title" />
	<meta
		content={(data.paste || { content: `eh` }).content.substring(0, 50)}
		property="og:description"
	/>
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
