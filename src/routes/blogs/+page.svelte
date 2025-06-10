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
	<div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each $filteredBlogs as blog}
			<div
				use:draggable={{ axis: 'both' }}
				class="bg-base-100 hover:bg-base-200 dark:bg-base-200 dark:hover:bg-base-300 text-base-content dark:text-base-content block rounded-lg border p-6 text-xs shadow transition-colors duration-200 sm:text-sm md:text-base"
			>
				<div class="mb-2 flex items-center gap-2">
					{#if blog.title.includes('Python')}
						<i class="bi bi-filetype-py text-xl text-yellow-500 sm:text-2xl" title="Python"></i>
					{/if}
					{#if blog.title.includes('Shell')}
						<i class="bi bi-terminal text-xl text-green-500 sm:text-2xl" title="Shell"></i>
					{/if}
					{#if blog.title.toLowerCase().includes('arch')}
						<i class="bi bi-box text-xl text-blue-500 sm:text-2xl" title="Arch Linux"></i>
					{/if}
					<h2 class="text-primary text-lg font-bold sm:text-xl md:text-2xl">{blog.title}</h2>
				</div>
				<p class="mb-4 text-xs opacity-80 sm:text-sm md:text-base">{blog.description}</p>
				<div class="mt-2 flex items-center justify-between">
					<span class="text-xs opacity-60 sm:text-sm">{blog.date}</span>
					<a href={blog.url} class="btn btn-primary btn-xs sm:btn-sm ml-4">Read</a>
				</div>
			</div>
		{/each}
	</div>
</div>
