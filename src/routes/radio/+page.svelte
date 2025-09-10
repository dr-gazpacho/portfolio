<script>
	import { onMount } from 'svelte';
	import { fetchTracklist } from '$lib/utils/index.js';

	// Initialize stores
	let data = $state(null);
	let loading = $state(true);
	let error = $state(null);

	onMount(async () => {
		try {
			const response = await fetch(`/api/library`);

			// Check response status first
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Parse JSON response
			const jsonData = await response.json();

			// Update store with parsed data
			data = jsonData;
		} catch (err) {
			// Handle both string and Error object cases
			error = err instanceof Error ? err.message : String(err);
		} finally {
			loading = false;
			console.log(data);
		}
	});

	// Modified sortem function that preserves data structure
	function sortem(data, more) {
		if (!data?.library || !Array.isArray(data.library)) return;

		// Create a copy of the array to avoid mutating original data
		const library = [...data.library];
		const element = library.shift();
		console.log(library, more);
	}
</script>

<h1>DJ Edgar Hoover</h1>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error: {error}</p>
{:else if data && data.library}
	<ul>
		{#each data.library as record}
			<li>
				<h2>{record.artist}</h2>
				<button onclick={() => fetchTracklist(record.id)} class="track-button"> Get Tracks </button>
			</li>
		{/each}
	</ul>
{/if}
