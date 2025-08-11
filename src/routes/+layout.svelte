<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/radio">Radio</a>
	<a href="/comics">Comics</a>
	<a href="/music">Music</a>
</nav>

{@render children?.()}
