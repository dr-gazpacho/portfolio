<script>
	let { children } = $props();
</script>

<section>
	<aside>sidebar</aside>
</section>

<style>
	aside {
		position: fixed;
		width: 20%; /* Need to make blog post section have margin of 20% otherwise it will flow underneath this*/
		height: 100vh;

		background-color: coral;
	}
</style>
