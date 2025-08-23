<script>
	import { fade } from 'svelte/transition';
	import BlogSidebar from '$lib/components/BlogSidebar.svelte';

	let { children, data } = $props();
</script>

<BlogSidebar>
	{#key data.currentRoute}
		<section in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
			{@render children?.()}
		</section>
	{/key}
</BlogSidebar>
