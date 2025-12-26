<script lang="ts">
    import { onMount } from 'svelte';
    import animal1 from '$lib/assets/animal_1.png';
    import animal2 from '$lib/assets/animal_2.png';
    import animal3 from '$lib/assets/animal_3.png';
    import animal4 from '$lib/assets/animal_4.png';
    import animal5 from '$lib/assets/animal_5.png';
    import animal6 from '$lib/assets/animal_6.png';
    import animal7 from '$lib/assets/animal_7.png';

    const animals = [animal1, animal2, animal3, animal4, animal5, animal6, animal7];
    
    let randomAnimals: { src: string; top: number; left: number; scale: number; rotation: number }[] = $state([]);

    onMount(() => {
        // Create a few random animals
        const count = 5; // Number of animals to show
        const newAnimals = [];
        
        for (let i = 0; i < count; i++) {
            newAnimals.push({
                src: animals[Math.floor(Math.random() * animals.length)],
                top: Math.random() * 90, // 0-90% of viewport height
                left: Math.random() * 90, // 0-90% of viewport width
                scale: 0.5 + Math.random() * 0.5, // 0.5 - 1.0 scale
                rotation: Math.random() * 30 - 15 // -15 to 15 degrees
            });
        }
        randomAnimals = newAnimals;
    });
</script>

<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {#each randomAnimals as animal}
        <img 
            src={animal.src} 
            alt="Decorative animal" 
            class="absolute opacity-20 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 ease-in-out"
            style="
                top: {animal.top}%;
                left: {animal.left}%;
                transform: scale({animal.scale}) rotate({animal.rotation}deg);
                width: 150px;
                height: auto;
            "
        />
    {/each}
</div>