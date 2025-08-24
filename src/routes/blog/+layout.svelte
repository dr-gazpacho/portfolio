<script>
	import { fade } from 'svelte/transition';
	import BlogSidebar from '$lib/components/BlogSidebar.svelte';

	let { children, data } = $props();
</script>

<section class="blog-container">
	<BlogSidebar />
	{#key data.currentRoute}
		<section class="blog-post-container" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
			{@render children?.()}
		</section>
	{/key}
</section>

<style>
	.blog-container {
		display: flex;
		flex-direction: row;
	}
	.blog-post-container {
		margin-left: 20%;
	}
</style>
