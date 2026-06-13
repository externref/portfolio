<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		path?: string;
	}

	let {
		title = '/home/externref',
		description = 'portfolio and personal blog',
		path = '/'
	}: Props = $props();

	const url = `https://externref.dev${path}`;
	const keywords =
		'Sarthak, Sarthak Upadhyay, externref, externref.dev, defsarthak, developer, portfolio, full-stack, rust, python, svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Sarthak Upadhyay" />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="externref.dev" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Sarthak Upadhyay',
		alternateName: ['externref', 'defsarthak'],
		url: 'https://externref.dev',
		sameAs: [
			'https://github.com/externref',
			'https://linkedin.com/in/defsarthak',
			'https://instagram.com/defsarthak',
			'https://wakatime.com/@externref'
		],
		jobTitle: 'Software Developer',
		knowsAbout: ['Rust', 'Python', 'TypeScript', 'Svelte', 'FastAPI', 'Full-Stack Development']
	})}<\/script>`}
</svelte:head>
