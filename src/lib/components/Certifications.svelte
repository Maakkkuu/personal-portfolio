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

<section id="certifications" class="bg-white py-24">
	<div class="relative container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-2 font-medium tracking-widest text-pink-600 uppercase">Achievements</h2>
			<h3 class="font-display text-4xl font-bold text-gray-900">Certifications & Badges</h3>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-300"></div>
		</div>

		<div class="relative px-0 md:px-12">
			<!-- Navigation Buttons (Desktop Only) -->
			<button
				class="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-pink-100 bg-white text-pink-500 shadow-md transition-colors hover:bg-pink-50 md:flex"
				on:click={scrollPrev}
				aria-label="Previous slide"
			>
				<Icon icon="lucide:chevron-left" class="h-6 w-6" />
			</button>

			<button
				class="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-pink-100 bg-white text-pink-500 shadow-md transition-colors hover:bg-pink-50 md:flex"
				on:click={scrollNext}
				aria-label="Next slide"
			>
				<Icon icon="lucide:chevron-right" class="h-6 w-6" />
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
                                    group relative mx-auto flex h-full min-h-[300px] w-full flex-col items-center rounded-xl border border-pink-100 bg-linear-to-br from-white to-pink-50 p-6 text-center
                                    shadow-lg transition-all duration-300 hover:shadow-xl md:w-80
                                "
							>
								<AnimalDecoration class="-top-8 -right-2 z-30 w-16" />
								<div class="relative mb-6 flex h-32 w-32 items-center justify-center p-2">
									<div
										class="absolute inset-0 scale-0 transform rounded-full bg-pink-50 transition-transform duration-300 group-hover:scale-100"
									></div>
									<img
										src={cert.image}
										alt={cert.title}
										class="relative z-10 h-full w-full object-contain"
									/>
								</div>

								<h4
									class="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-pink-600"
								>
									{cert.title}
								</h4>
								<p class="mb-1 text-sm text-gray-500">{cert.issuer}</p>
								<p class="mt-auto text-xs text-gray-400">{cert.date}</p>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

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
