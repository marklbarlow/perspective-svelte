import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	assetsInclude: ['**/*.arrow'],
	optimizeDeps: { esbuildOptions: { target: 'esnext' } },
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
