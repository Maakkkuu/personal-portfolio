<script lang="ts">
    import { skills } from '$lib/data';
    import Icon from '@iconify/svelte';

    const skillIcons: Record<string, string> = {
        "Javascript/Typescript": "logos:javascript", // Or typescript-icon
        "Python": "logos:python",
        "React JS": "logos:react",
        "Tailwind CSS": "logos:tailwindcss-icon",
        "Supabase": "logos:supabase-icon",
        "C/C++": "logos:c-plusplus",
        "AWS": "logos:aws",
        "Next JS": "logos:nextjs-icon",
        "Svelte": "logos:svelte-icon",
        "Github": "logos:github-icon"
    };

    // Helper to get icon or default
    function getIcon(skill: string) {
        return skillIcons[skill] || "carbon:code";
    }
</script>

<section id="skills" class="py-24 bg-pink-50/50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

    <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-pink-600 font-medium tracking-widest mb-2 uppercase">Expertise</h2>
            <h3 class="text-4xl font-bold text-gray-900 font-serif">Skills & Technologies</h3>
            <div class="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {#each skills as skill}
                <div class="group relative">
                    <div class="absolute -inset-0.5 bg-linear-to-r from-pink-300 to-red-300 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <div class="relative px-6 py-4 bg-linear-to-br from-white to-pink-50 rounded-xl leading-none flex items-center gap-3 hover:shadow-sm transition-all border border-pink-100">
                        <div class="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                            <Icon icon={getIcon(skill)} />
                        </div>
                        <span class="text-gray-700 font-medium group-hover:text-pink-600 transition-colors">{skill}</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
