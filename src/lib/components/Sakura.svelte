<script lang="ts">
	import { onMount } from 'svelte';

	let petals: { id: number; left: number; animationDuration: number; delay: number }[] = $state([]);

	onMount(() => {
		const petalCount = 30;
		const newPetals = [];

		for (let i = 0; i < petalCount; i++) {
			newPetals.push({
				id: i,
				left: Math.random() * 100,
				animationDuration: Math.random() * 5 + 5, // 5-10s
				delay: Math.random() * 5
			});
		}
		petals = newPetals;
	});
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
	{#each petals as petal (petal.id)}
		<div
			class="animate-fall absolute top-[-10%] h-4 w-4 rounded-tl-xl rounded-br-xl bg-pink-200/60"
			style="
                left: {petal.left}%;
                animation-duration: {petal.animationDuration}s;
                animation-delay: {petal.delay}s;
            "
		></div>
	{/each}
</div>

<style>
	@keyframes fall {
		0% {
			transform: translateY(0) rotate(0deg) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			transform: translateY(110vh) rotate(360deg) translateX(50px);
			opacity: 0;
		}
	}
	.animate-fall {
		animation-name: fall;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>
