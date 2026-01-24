<script lang="ts">
    import { certifications } from '$lib/data';
    import AnimalDecoration from './AnimalDecoration.svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Icon from '@iconify/svelte';

    let emblaApi: any;
    
    const options = { 
        loop: true, 
        axis: 'y' as const,
        breakpoints: {
            '(min-width: 768px)': { axis: 'x' as const }
        }
    };

    function onInit(event: CustomEvent) {
        emblaApi = event.detail;
    }

    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev();
    }

    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext();
    }
</script>

<style>
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
        flex-direction: column; /* Mobile first: vertical */
        /* height for vertical carousel on mobile */
        height: 600px; 
    }
    .embla__slide {
        flex: 0 0 auto;
        min-height: 0;
        /* Adjust spacing for slides in vertical mode */
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (min-width: 768px) {
        .embla__container {
            flex-direction: row;
            height: auto;
            /* Adjust spacing for slides in horizontal mode */
        }
        .embla__slide {
            flex: 0 0 25%; /* Show 4 items roughly, or let specific width handle it */
            min-width: 0;
            padding-top: 3rem; /* Extra top gap for animals */
        }
    }
</style>

<section id="certifications" class="py-24 bg-white">
    <div class="container mx-auto px-6 relative">
        <div class="text-center mb-16">
            <h2 class="text-pink-600 font-medium tracking-widest mb-2 uppercase">Achievements</h2>
            <h3 class="text-4xl font-bold text-gray-900 font-display">Certifications & Badges</h3>
            <div class="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="relative px-0 md:px-12">
            <!-- Navigation Buttons (Desktop Only) -->
            <button 
                class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors border border-pink-100"
                on:click={scrollPrev}
                aria-label="Previous slide"
            >
                <Icon icon="lucide:chevron-left" class="w-6 h-6" />
            </button>
            
            <button 
                class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors border border-pink-100"
                on:click={scrollNext}
                aria-label="Next slide"
            >
                <Icon icon="lucide:chevron-right" class="w-6 h-6" />
            </button>

            <!-- Carousel -->
            <div class="embla" use:emblaCarouselSvelte={{ options, plugins: [] }} on:emblaInit={onInit}>
                <div class="embla__container">
                    {#each certifications as cert}
                        <div class="embla__slide">
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="
                                    group bg-linear-to-br from-white to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 flex flex-col items-center text-center relative
                                    w-full md:w-80 h-full min-h-[300px] mx-auto
                                "
                            >
                                <AnimalDecoration class="-top-8 -right-2 w-16 z-30" />
                                <div class="w-32 h-32 mb-6 relative flex items-center justify-center p-2">
                                    <div class="absolute inset-0 bg-pink-50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    <img src={cert.image} alt={cert.title} class="w-full h-full object-contain relative z-10" />
                                </div>
                                
                                <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{cert.title}</h4>
                                <p class="text-sm text-gray-500 mb-1">{cert.issuer}</p>
                                <p class="text-xs text-gray-400 mt-auto">{cert.date}</p>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
