<script lang="ts">
    import { onMount } from 'svelte';
    import animal1 from '$lib/assets/animal_1.png';
    import animal2 from '$lib/assets/animal_2.png';
    import animal3 from '$lib/assets/animal_3.png';
    import animal4 from '$lib/assets/animal_4.png';
    import animal5 from '$lib/assets/animal_5.png';
    import animal6 from '$lib/assets/animal_6.png';
    import animal7 from '$lib/assets/animal_7.png';
    import animal8 from '$lib/assets/animal_8.png';
    import animal9 from '$lib/assets/animal_9.png';
    import animal10 from '$lib/assets/animal_10.png';
    import animal11 from '$lib/assets/animal_11.png';
    import animal12 from '$lib/assets/animal_12.png';
    import animal13 from '$lib/assets/animal_13.png';
    import animal14 from '$lib/assets/animal_14.png';

    const animals = [
        animal1, animal2, animal3, animal4, animal5, animal6, animal7,
        animal8, animal9, animal10, animal11, animal12, animal13, animal14
    ];
    
    let { class: className = "", style = "" } = $props();
    
    let selectedAnimal = $state(animals[0]);

    onMount(() => {
        selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    });
</script>

<img 
    src={selectedAnimal} 
    alt="Decorative animal" 
    class="absolute w-20 h-auto object-contain pointer-events-none z-20 transition-transform hover:scale-110 duration-300 {className}"
    style={style}
/>