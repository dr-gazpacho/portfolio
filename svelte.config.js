import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'; -> use this adapter to prerender html
import sveltePreprocess from 'svelte-preprocess';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() 
	},
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		}), 
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
			/* Other sveltePreprocess options here, like SCSS */
		}
			
		)
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
