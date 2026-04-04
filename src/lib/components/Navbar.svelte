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
		{ name: 'Organizations', href: '#organizations' }
	];
</script>

<nav
	class={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-6'}`}
>
	<div class="flex w-full items-center justify-between px-6 md:px-10">
		<a href="#home" class="block h-12 w-auto">
			<img src={logo} alt="Makku Logo" class="h-full w-auto object-contain" />
		</a>

		<div class="hidden items-center space-x-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium tracking-wide text-gray-600 uppercase transition-colors hover:text-pink-600"
				>
					{link.name}
				</a>
			{/each}

			<div class="mx-2 h-4 w-px bg-gray-300"></div>

			<div class="flex items-center gap-3">
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-gray-900"
					aria-label="GitHub"
				>
					<Icon icon="mdi:github" width="20" height="20" />
				</a>
				<a
					href={personalInfo.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-blue-700"
					aria-label="LinkedIn"
				>
					<Icon icon="mdi:linkedin" width="20" height="20" />
				</a>
			</div>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="p-2 text-gray-600 hover:text-pink-600 focus:outline-none md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<Icon icon="mdi:close" width="24" height="24" />
			{:else}
				<Icon icon="mdi:menu" width="24" height="24" />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMenuOpen}
		<div
			class="absolute top-full left-0 flex w-full flex-col space-y-4 border-t border-gray-100 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-md md:hidden"
			transition:slide={{ duration: 300 }}
		>
			{#each links as link}
				<a
					href={link.href}
					class="block py-2 text-sm font-medium tracking-wide text-gray-600 uppercase hover:text-pink-600"
					onclick={() => (isMenuOpen = false)}
				>
					{link.name}
				</a>
			{/each}
		</div>
	{/if}
</nav>
