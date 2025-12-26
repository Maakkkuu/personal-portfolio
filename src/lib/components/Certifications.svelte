<script lang="ts">
    import { certifications } from '$lib/data';
    import AnimalDecoration from './AnimalDecoration.svelte';
</script>

<section id="certifications" class="py-24 bg-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-pink-600 font-medium tracking-widest mb-2 uppercase">Achievements</h2>
            <h3 class="text-4xl font-bold text-gray-900 font-serif">Certifications & Badges</h3>
            <div class="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each certifications as cert}
                <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="group bg-linear-to-br from-white to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 flex flex-col items-center text-center h-full relative"
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
            {/each}
        </div>
    </div>
</section>
