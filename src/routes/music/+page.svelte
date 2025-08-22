<script>
	import warm_saw from '$lib/wavetables/warm_saw';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let audioContext;

	async function initAudio() {
		if (!browser) return;

		if (!audioContext) {
			audioContext = new AudioContext();

			// Create periodic wave once
			const wave = new PeriodicWave(audioContext, {
				real: warm_saw.real,
				imag: warm_saw.imag,
			});

			let attackTime = 0.2;
			const attackControl = document.querySelector('#attack');
			attackControl.addEventListener('input', ev => {
				attackTime = parseFloat(ev.target.value);
			});

			let releaseTime = 0.5;
			const releaseControl = document.querySelector('#release');
			releaseControl.addEventListener('input', ev => {
				releaseTime = parseFloat(ev.target.value);
			});

			const sweepLength = 2;

			function playSweep(time) {
				const osc = new OscillatorNode(audioContext, {
					frequency: 380,
					type: 'custom',
					periodicWave: wave,
				});

				const sweepEnv = new GainNode(audioContext);
				sweepEnv.gain.cancelScheduledValues(time);
				sweepEnv.gain.setValueAtTime(0, time);
				sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
				sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

				osc.connect(sweepEnv).connect(audioContext.destination);
				osc.start(time);
				osc.stop(time + sweepLength);
			}

			// Add play button
			document.querySelector('#play').addEventListener('click', () => {
				playSweep(audioContext.currentTime);
			});

			return audioContext;
		}
		return audioContext;
	}

	onMount(async () => {
		await initAudio();
	});
</script>

<button id="play">Play Sound</button>
<label for="attack">Attack</label>
<input name="attack" id="attack" type="range" min="0" max="1" value="0.2" step="0.1" />
<label for="release">Release</label>
<input name="release" id="release" type="range" min="0" max="1" value="0.5" step="0.1" />
