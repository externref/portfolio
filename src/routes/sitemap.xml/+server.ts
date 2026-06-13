import type { RequestHandler } from '@sveltejs/kit';

const site = 'https://externref.dev';

const routes = [
	{ path: '/', priority: '1.0', changefreq: 'monthly' },
	{ path: '/projects', priority: '0.9', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.7', changefreq: 'yearly' }
];

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = routes
		.map(
			({ path, priority, changefreq }) => `
	<url>
		<loc>${site}${path}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
