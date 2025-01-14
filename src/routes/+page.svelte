<script lang="ts">
	import perspective from '@finos/perspective';
	import perspective_viewer from '@finos/perspective-viewer';

	import SERVER_WASM from '@finos/perspective/dist/wasm/perspective-server.wasm?url';
	import CLIENT_WASM from '@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm?url';

	import '@finos/perspective-viewer-datagrid';
	import '@finos/perspective-viewer/dist/css/pro.css';
	import arrow from 'superstore-arrow/superstore.lz4.arrow';

	async function initialise() {
		await Promise.all([
			perspective.init_server(fetch(SERVER_WASM)),
			perspective_viewer.init_client(fetch(CLIENT_WASM))
		]);

		const worker = await perspective.worker();
		const viewer = document.querySelector('perspective-viewer');
		const resp = await fetch(arrow);
		const buffer = await resp.arrayBuffer();
		const table = worker.table(buffer);
		viewer?.load(table);
	}

	initialise();
</script>

<perspective-viewer style="height:100vh;"></perspective-viewer>
