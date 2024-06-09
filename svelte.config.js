
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			strict: true
		  }),
		  paths: {
			  base: process.env.NODE_ENV === "production" ? "/wordsight-docs" : "",
		  }
	}
};

export default config;
