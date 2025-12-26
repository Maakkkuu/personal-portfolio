<script lang="ts">
    import { organizations } from '$lib/data';
    import AnimalDecoration from './AnimalDecoration.svelte';
</script>

<section id="organizations" class="py-24 bg-pink-50/30">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-pink-600 font-medium tracking-widest mb-2 uppercase">Community</h2>
            <h3 class="text-4xl font-bold text-gray-900 font-serif">Organizations</h3>
            <div class="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
            <p class="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                Since 2023, my path in computer science has been defined by a deep curiosity for technology and a search for new challenges. My experiences with SPARCS and various organizations have shaped who I am today.
            </p>
        </div>

        <div class="space-y-8 max-w-4xl mx-auto">
            {#each organizations as org, i}
                <div class="bg-linear-to-br from-white to-pink-50 rounded-3xl p-8 md:p-10 shadow-lg border border-pink-100 flex flex-col md:flex-row gap-8 items-center md:items-start relative group hover:shadow-xl transition-all duration-300">
                    <AnimalDecoration class="-top-8 -right-4 w-20 z-30" />
                    
                    <!-- Logo Column -->
                    <div class="w-32 h-32 shrink-0 bg-white rounded-2xl p-4 flex items-center justify-center border border-pink-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <img src={org.logo} alt={org.name} class="w-full h-full object-contain" />
                    </div>

                    <!-- Content Column -->
                    <div class="flex-1 text-center md:text-left w-full">
                        <h4 class="text-2xl font-bold text-gray-900 font-serif mb-6 leading-tight">{org.name}</h4>
                        
                        <!-- Roles Timeline -->
                        <div class="space-y-6 relative pl-4 md:pl-2">
                            {#each org.roles as role}
                                <div class="relative pl-8 border-l-2 border-pink-200 last:border-l-0 md:last:border-l-2 pb-2">
                                    <div class="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-pink-400 ring-4 ring-white"></div>
                                    <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                                        <p class="font-bold text-gray-800 text-lg">{role.title}</p>
                                        <p class="text-pink-600 font-medium text-sm bg-pink-50 px-3 py-1 rounded-full inline-block md:inline">{role.date}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
