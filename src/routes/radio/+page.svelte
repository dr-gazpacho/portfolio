<script>
	import { onMount } from 'svelte';

	// Initialize stores
	let libraryData = $state(null);
	// TO DO
	// On track fetch -> return track data and map it into library data?
	// that or map data right onto dom... somehow...
	// look into :mailto
	let trackData = $state(null);
	let loading = $state(true);
	let error = $state(null);

	onMount(async () => {
		try {
			const response = await fetch(`/api/library`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const jsonData = await response.json();
			libraryData = jsonData;
		} catch (err) {
			error = err instanceof Error ? err.message : String(err);
		} finally {
			loading = false;
		}
	});

	export const fetchTracklist = async recordId => {
		const res = await fetch(`/api/record/${recordId}`);
		const response = await res.json();
		return response;
	};

	function sortem(data, more) {
		data.shift();
		console.log(data);
	}
</script>

<h1>DJ Edgar Hoover</h1>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error: {error}</p>
{:else if libraryData && libraryData.library}
	<ul>
		{#each libraryData.library as record}
			<li>
				<h2>{record.artist}</h2>
				<button onclick={() => fetchTracklist(record.id)} class="track-button"> Get Tracks </button>
				<button onclick={() => sortem(libraryData.library)} class="track-button"> Get tracko </button>
			</li>
		{/each}
	</ul>
{/if}
