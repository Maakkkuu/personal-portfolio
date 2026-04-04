<script lang="ts">
	import { skills } from '$lib/data';
	import Icon from '@iconify/svelte';

	const skillIcons: Record<string, string> = {
		'Javascript/Typescript': 'logos:javascript', // Or typescript-icon
		Python: 'logos:python',
		'React JS': 'logos:react',
		'Tailwind CSS': 'logos:tailwindcss-icon',
		Supabase: 'logos:supabase-icon',
		'C/C++': 'logos:c-plusplus',
		AWS: 'logos:aws',
		'Next JS': 'logos:nextjs-icon',
		Svelte: 'logos:svelte-icon',
		Github: 'logos:github-icon',
		Docker: 'devicon:docker'
	};

	// Helper to get icon or default
	function getIcon(skill: string) {
		return skillIcons[skill] || 'carbon:code';
	}
</script>

<section id="skills" class="relative overflow-hidden bg-pink-50/50 py-24">
	<!-- Background decoration -->
	<div
		class="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
	></div>

	<div class="relative z-10 container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-2 font-medium tracking-widest text-pink-600 uppercase">Expertise</h2>
			<h3 class="font-display text-4xl font-bold text-gray-900">Skills & Technologies</h3>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-300"></div>
		</div>

		<div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
			{#each skills as skill}
				<div class="group relative">
					<div
						class="absolute -inset-0.5 rounded-xl bg-linear-to-r from-pink-300 to-red-300 opacity-25 blur transition duration-200 group-hover:opacity-75"
					></div>
					<div
						class="relative flex items-center gap-3 rounded-xl border border-pink-100 bg-linear-to-br from-white to-pink-50 px-6 py-4 leading-none transition-all hover:shadow-sm"
					>
						<div class="text-2xl transition-all duration-300 group-hover:grayscale-0 md:grayscale">
							<Icon icon={getIcon(skill)} />
						</div>
						<span class="font-medium text-gray-700 transition-colors group-hover:text-pink-600"
							>{skill}</span
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
