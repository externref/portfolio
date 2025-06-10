<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import languages from 'prismjs/components.js';

	let content = '';
	let author = 'anonymous';
	let language = 'plaintext';
	let result: any = null;
	let error: string | null = null;
	let deleteCode: string | null = null;

	const prismLanguages = Object.entries(languages.languages)
		.filter(([key, val]) => typeof val === 'object' && key !== 'meta')
		.map(([key]) => key)
		.sort((a, b) => a.localeCompare(b));
</script>

<div class="mx-auto max-w-5xl p-4">
	<h1 class="text-primary mb-4 text-2xl font-bold">Pastebin</h1>

	<form
		use:enhance={({ formElement, formData, action, cancel }) => {
			return async ({ result }) => {
				// @ts-ignore
				goto(`/paste/${result.data.paste_id}`, { replaceState: true });
			};
		}}
		method="POST"
		enctype="multipart/form-data"
		class="bg-base-100 dark:bg-base-200 mb-6 space-y-4 rounded-xl p-4 shadow"
	>
		<div>
			<label class="mb-1 block font-semibold" for="content">Content</label>
			<textarea
				id="content"
				name="content"
				bind:value={content}
				required
				rows="14"
				class="textarea textarea-bordered max-h-[600px] min-h-[300px] w-full resize-y font-mono text-sm outline-none"
			></textarea>
		</div>
		<div class="flex flex-wrap gap-2">
			<div class="min-w-[120px] flex-1">
				<label class="mb-1 block" for="author">Author</label>
				<input
					id="author"
					name="author"
					bind:value={author}
					class="input input-bordered w-full outline-none"
				/>
			</div>
			<div class="min-w-[120px] flex-1">
				<label class="mb-1 block" for="language">Language</label>
				<select
					id="language"
					name="language"
					bind:value={language}
					class="select select-bordered w-full outline-none"
				>
					{#each prismLanguages as lang}
						<option value={lang}>{lang}</option>
					{/each}
				</select>
			</div>
		</div>
		<button type="submit" class="btn btn-primary w-full">Create Paste</button>
	</form>

	{#if result}
		<div class="alert alert-success mb-4">
			Paste created! <br />
			<strong>ID:</strong> <a class="link" href={`/paste/${result.id}`}>{result.id}</a><br />
			<strong>Delete Code:</strong> <span class="font-mono">{deleteCode}</span><br />
			<strong>Author:</strong>
			{result.author}<br />
			<strong>Language:</strong>
			{result.language}<br />
			<strong>Code:</strong>
			<pre
				class="bg-base-200 mt-2 overflow-x-auto rounded p-3 font-mono text-xs whitespace-pre-wrap">{result.content}</pre>
		</div>
	{/if}
	{#if error}
		<div class="alert alert-error mb-4">{error}</div>
	{/if}

	<div class="text-base-content/60 mt-8 text-xs">
		To view a paste: <span class="font-mono">/paste/[id]</span> &nbsp;|&nbsp; To delete:
		<span class="font-mono">/paste/delete/[deletecode]</span>
	</div>
</div>

<svelte:head>
	<title>/home/externref/pastebin</title>
	<meta content="externref" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<style>
	input:focus,
	textarea:focus,
	select:focus {
		outline: none !important;
		box-shadow: none !important;
		border-color: inherit !important;
	}
</style>
