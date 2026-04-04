<script lang="ts">
	import { projects } from '$lib/data';
	import AnimalDecoration from './AnimalDecoration.svelte';
	import { onMount } from 'svelte';

	let showSecondary = false;
	let isMobile = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		const interval = setInterval(() => {
			if (isMobile) {
				showSecondary = !showSecondary;
			}
		}, 5000);

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<section id="projects" class="relative bg-pink-50/30 py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-2 font-medium tracking-widest text-pink-600 uppercase">My Work</h2>
			<h3 class="font-display text-4xl font-bold text-gray-900">Featured Projects</h3>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-300"></div>
		</div>

		<div class="mx-auto max-w-5xl space-y-24">
			{#each projects as project, i}
				<div
					class="group relative rounded-2xl border border-pink-100 bg-linear-to-br from-white to-pink-50 shadow-xl transition-all duration-300 hover:shadow-2xl"
				>
					<AnimalDecoration class="-top-12 -right-4 z-30 w-24" />

					<!-- Image Section - Full width -->
					<div
						class="relative aspect-video w-full overflow-hidden rounded-t-2xl border-b border-gray-100 bg-pink-50/50 group-hover:shadow-inner"
					>
						<!-- Primary Image -->
						<img
							src={project.images[0]}
							alt={project.title}
							class="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-in-out {project
								.images[1]
								? 'group-hover:opacity-0'
								: ''} {isMobile && showSecondary && project.images[1] ? 'opacity-0' : ''}"
						/>

						<!-- Secondary Image (on hover) -->
						{#if project.images[1]}
							<img
								src={project.images[1]}
								alt="{project.title} alternate view"
								class="absolute inset-0 h-full w-full object-contain object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 {isMobile &&
								showSecondary
									? 'opacity-100'
									: ''}"
							/>
						{/if}

						<div
							class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<!-- Content Section -->
					<div class="space-y-6 p-8 md:p-12">
						<div
							class="flex flex-col items-start gap-4 md:flex-row md:items-start md:justify-between"
						>
							<div>
								<h4 class="mb-2 font-display text-3xl font-bold text-gray-900">{project.title}</h4>
								<p class="text-lg font-medium text-pink-600">{project.role}</p>
							</div>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex shrink-0 items-center rounded-full bg-gray-900 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-pink-600 hover:shadow-pink-500/30"
								>
									Visit Website
									<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							{/if}
						</div>

						<p class="text-lg leading-relaxed text-gray-600">{project.description}</p>

						<div class="border-t border-gray-100 pt-4">
							<div class="flex flex-wrap gap-3">
								{#each project.tech as tech}
									<span
										class="rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
