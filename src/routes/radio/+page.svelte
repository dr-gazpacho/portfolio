<script>
	export let data;
	import { fetchTracklist } from '$lib/utils/index.js';
</script>

<h1>DJ Edgar Hoover</h1>

{#await data.collection}
	<p>Loading your data...</p>
{:then resolvedData}
	<ul>
		{#each resolvedData.library as record}
			<li>
				<h2>
					{record.artist}
				</h2>
				<button on:click={() => fetchTracklist(record.id)}>Get Tracks</button>
			</li>
		{/each}
	</ul>
{:catch error}
	<p>Error: {error.message}</p>
{/await}
