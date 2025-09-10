<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/style.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navigating } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{#if $navigating}
	<div class="global-loading-indicator">
		<p>Loading...</p>
	</div>
{:else}
	{@render children?.()}
{/if}

<Footer />
