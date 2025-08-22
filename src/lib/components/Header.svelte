<script>
	import { pages } from '$lib/constants'
</script>

<header>
	<a href="/">Home</a>

	<nav>
		<ul>
			{#each pages as page}
				<li>
					<a href={page.route}>{page.displayName}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>


<style>
	header {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
    ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>