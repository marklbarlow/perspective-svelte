<script lang="ts">
	import perspective from '@finos/perspective/dist/esm/perspective.inline';

	import '@finos/perspective-viewer-datagrid';
	import '@finos/perspective-viewer/dist/css/pro.css';
	import '@finos/perspective-viewer/dist/esm/perspective-viewer.inline';
	import arrow from 'superstore-arrow/superstore.lz4.arrow';

	async function initialise() {
		const worker = await perspective.worker();
		const viewer = document.querySelector('perspective-viewer');
		const resp = await fetch(arrow);
		const buffer = await resp.arrayBuffer();
		const table = worker.table(buffer);
		viewer?.load(table);
	}

	$effect(() => {
		initialise();
	});
</script>

<perspective-viewer style="height:100vh;"></perspective-viewer>
