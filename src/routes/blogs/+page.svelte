<script lang="ts">
	import { BlogInfo } from '$lib';
	import { draggable } from '@neodrag/svelte';
	import { derived, writable } from 'svelte/store';

	const blogs: BlogInfo[] = [
		new BlogInfo(
			'Function Overloading in Python',
			'Implementing function overloading in Python, a powerful feature that allows you to define multiple functions with the same name but different parameters.',
			'/blogs/function-overloading-in-python',
			undefined,
			'10-06-2025'
		),
		new BlogInfo(
			'Shell Basics',
			"A beginner's guide to shell scripting, covering essential commands and concepts to help you automate tasks in a Unix-like environment.",
			'/blogs/shell-basics',
			undefined,
			'10-06-2025'
		),
		new BlogInfo(
			'Arch Linux Installation Guide',
			'A comprehensive guide to installing Arch Linux, including partitioning, package management, and system configuration.',
			'/blogs/arch-install',
			undefined,
			'10-06-2025'
		)
	].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

	const search = writable('');
	const filteredBlogs = derived([search], ([$search]) => {
		if (!$search.trim()) return blogs;
		const q = $search.trim().toLowerCase();
		return blogs.filter(
			(b) => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
		);
	});
</script>

<div class="mt-4 flex flex-col gap-4">
	<input
		type="text"
		class="input input-bordered mx-auto w-full max-w-md text-xs focus:ring-0 focus:outline-none sm:text-sm md:text-base"
		placeholder="Search blogs..."
		bind:value={$search}
		style="box-shadow: none;"
	/>
	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each $filteredBlogs as blog}
			<div
				use:draggable={{ axis: 'both' }}
				class="bg-base-100 dark:bg-base-200 border-base-200 dark:border-base-300 flex flex-col rounded-xl border p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					{#if blog.title.includes('Python')}
						<i class="bi bi-filetype-py text-2xl text-yellow-500" title="Python"></i>
					{/if}
					{#if blog.title.includes('Shell')}
						<i class="bi bi-terminal text-2xl text-green-500" title="Shell"></i>
					{/if}
					{#if blog.title.toLowerCase().includes('arch')}
						<i class="bi bi-box text-2xl text-blue-500" title="Arch Linux"></i>
					{/if}
					<h2 class="text-primary flex-1 text-lg font-bold sm:text-xl md:text-2xl">{blog.title}</h2>
				</div>
				<p class="text-base-content/80 mb-3 flex-1 text-sm">{blog.description}</p>
				<div class="border-base-200 mt-2 flex items-center justify-between border-t pt-2">
					<span class="text-base-content/60 text-xs">{blog.date}</span>
					<a href={blog.url} class="btn btn-primary btn-xs sm:btn-sm ml-4">Read</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<svelte:head>
	<title>/home/externref/blogs</title>
	<meta content="externref" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
