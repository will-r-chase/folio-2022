import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx'],
			layout: "./src/routes/writing/layout.svelte"
        })
    ],
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['static']
				}
			}
		}
	},
};

export default config;
