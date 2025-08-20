<script>
	export let data;
    const {title, date, Content} = data;
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
{#if data.categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.categories as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}