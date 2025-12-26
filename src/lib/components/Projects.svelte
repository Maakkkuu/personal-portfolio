<script lang="ts">
    import { projects } from '$lib/data';
    import AnimalDecoration from './AnimalDecoration.svelte';
    import { onMount } from 'svelte';

    let showSecondary = false;

    onMount(() => {
        const interval = setInterval(() => {
            showSecondary = !showSecondary;
        }, 5000);

        return () => clearInterval(interval);
    });
</script>

<section id="projects" class="py-24 bg-white relative">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-pink-600 font-medium tracking-widest mb-2 uppercase">My Work</h2>
            <h3 class="text-4xl font-bold text-gray-900 font-serif">Featured Projects</h3>
            <div class="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="space-y-24 max-w-5xl mx-auto">
            {#each projects as project, i}
                <div class="bg-linear-to-br from-white to-pink-50 rounded-2xl shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300 group relative">
                    <AnimalDecoration class="-top-12 -right-4 w-24 z-30" />

                    <!-- Image Section - Full width -->
                    <div class="w-full aspect-video relative overflow-hidden bg-pink-50/50 border-b border-gray-100 group-hover:shadow-inner rounded-t-2xl">
                        <!-- Primary Image -->
                        <img 
                            src={project.images[0]} 
                            alt={project.title} 
                            class="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 ease-in-out {project.images[1] ? 'group-hover:opacity-0' : ''} {showSecondary && project.images[1] ? 'opacity-0' : ''}"
                        />
                        
                        <!-- Secondary Image (on hover) -->
                        {#if project.images[1]}
                            <img 
                                src={project.images[1]} 
                                alt="{project.title} alternate view" 
                                class="absolute inset-0 w-full h-full object-contain object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out {showSecondary ? 'opacity-100' : ''}"
                            />
                        {/if}
                        
                        <div class="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <!-- Content Section -->
                    <div class="p-8 md:p-12 space-y-6">
                        <div class="flex flex-col items-start md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                                <h4 class="text-3xl font-bold text-gray-900 font-serif mb-2">{project.title}</h4>
                                <p class="text-pink-600 font-medium text-lg">{project.role}</p>
                            </div>
                            {#if project.link}
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-500/30 shrink-0"
                                >
                                    Visit Website
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            {/if}
                        </div>

                        <p class="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                        
                        <div class="pt-4 border-t border-gray-100">
                            <div class="flex flex-wrap gap-3">
                                {#each project.tech as tech}
                                    <span class="px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-full border border-pink-100">
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
