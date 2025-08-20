import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'; -> use this adapter to prerender html
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() 
	},
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}), 
		sveltePreprocess()
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
