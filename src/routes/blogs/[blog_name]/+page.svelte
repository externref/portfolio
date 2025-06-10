<script lang="ts">
  // @ts-nocheck


	import FunctionOverloading from '$lib/blogs/function-overloading.svx';
	import ShellBasics from '$lib/blogs/shell-basics.svx';
	import ErrorPage from '$lib/blogs/error.svx';
  import ArchInstall from '$lib/blogs/arch-install.svx';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import Giscus from '@giscus/svelte';
	import { browser } from '$app/environment';

	const blogs = {
		'function-overloading-in-python': FunctionOverloading,
		'shell-basics': ShellBasics,
    'arch-install': ArchInstall
	};

	const currentBlog = blogs[page.params.blog_name as keyof typeof blogs] || ErrorPage;

	let theme: string = $state('dim');

	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') || 'nord';
			theme = savedTheme;
		}
	});
</script>



<div
	class="prose sm:prose-sm md:prose-base prose-img:rounded-md dark:prose-invert prose-slate mx-auto my-10 justify-center sm:max-w-none lg:max-w-[55%]"
>
<div class="not-prose mb-2"><a aria-label="home" href="/"><i class="bi text-primary bi-house"></i></a><b>&nbsp;/&nbsp;</b><a class="text-primary" href="/blogs">blogs</a><b>&nbsp;/&nbsp;</b>{page.params.blog_name}</div>
	<svelte:component this={currentBlog} />
	<div
		class="bg-base-200 dark:bg-base-300 border-base-300 dark:border-base-100 mt-12 rounded-xl border p-2 shadow md:p-4"
	>
		<Giscus
			id="comments"
			repo="externref/portfolio"
			repoId="R_kgDOO3ulOg"
			category="General"
			categoryId="DIC_kwDOO3ulOs4CrRJ0"
			mapping="pathname"
			strict="false"
			reactionsEnabled={true}
			emitMetadata="false"
			inputPosition="bottom"
			theme={theme === 'dim' ? 'dark_dimmed' : 'noborder_light'}
			lang="en"
		/>
	</div>
</div>

<svelte:head>
	<title>blog: {page.params.blog_name}</title>
	<meta content="blog: {page.params.blog_name}" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
