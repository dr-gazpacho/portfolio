<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	{#each data.collection.library as record}
		<li>
			<h2>
				{record.artist}
			</h2>
		</li>
	{/each}
</ul>
