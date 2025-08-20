<script>
    let count = $state(0);

</script>
<div>
    This is just a svelte component, but it could be anything with some meaningful functionality. Just a little clicky button in the mean time.
</div>
<button onclick={() => count++}>
	clicks: {count}
</button>
