<script lang="ts">
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import logo from '$lib/assets/img/logo.png';
    import { personalInfo } from '$lib/data';
    import Icon from '@iconify/svelte';

    let isScrolled = false;
    let isMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Organizations', href: '#organizations' },
    ];
</script>

<nav class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
    <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" class="block h-12 w-auto">
            <img src={logo} alt="Makku Logo" class="h-full w-auto object-contain" />
        </a>
        
        <div class="hidden md:flex items-center space-x-8">
            {#each links as link}
                <a href={link.href} class="text-gray-600 hover:text-pink-600 transition-colors font-medium text-sm uppercase tracking-wide">
                    {link.name}
                </a>
            {/each}
            
            <div class="h-4 w-px bg-gray-300 mx-2"></div>
            
            <div class="flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="GitHub">
                    <Icon icon="mdi:github" width="20" height="20" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                </a>
            </div>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-600 hover:text-pink-600 focus:outline-none p-2" onclick={toggleMenu} aria-label="Toggle menu">
            {#if isMenuOpen}
                <Icon icon="mdi:close" width="24" height="24" />
            {:else}
                <Icon icon="mdi:menu" width="24" height="24" />
            {/if}
        </button>
    </div>

    <!-- Mobile Menu Overlay -->
    {#if isMenuOpen}
        <div class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4" transition:slide={{ duration: 300 }}>
            {#each links as link}
                <a href={link.href} class="text-gray-600 hover:text-pink-600 font-medium text-sm uppercase tracking-wide block py-2" onclick={() => isMenuOpen = false}>
                    {link.name}
                </a>
            {/each}
        </div>
    {/if}
</nav>
