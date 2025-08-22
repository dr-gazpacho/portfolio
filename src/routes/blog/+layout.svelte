<script>
	import { fade } from 'svelte/transition';

	let { children, data } = $props();
</script>

{#key data.currentRoute}
	<section in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children?.()}
    </section>
{/key}
