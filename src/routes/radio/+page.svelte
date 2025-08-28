<script>
	export let data;
	import { fetchTracklist } from '$lib/utils/index.js';
</script>

<h1>Blog</h1>

<ul>
	{#each data.collection.library as record}
		<li>
			<h2>
				{record.artist}
			</h2>
			<button on:click={fetchTracklist(record.id)}>Get Tracks</button>
		</li>
	{/each}
</ul>
