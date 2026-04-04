<script lang="ts">
	import { personalInfo } from '$lib/data';
	import AnimalDecoration from './AnimalDecoration.svelte';
	import { TypeWriter } from 'svelte-typewrite';

	const typewriterTexts = [
		"I'm Mark Jaily Peña",
		"I'm a Developer",
		"I'm an AWS Certified",
		"I'm into Cybersec",
		'I Turn Ideas into Reality',
		'I Build Scalable Apps',
		"I'm a Cat Lover",
		"I'm a Casual Gamer",
		"I'm an Avid Learner"
	];
</script>

<section
	id="home"
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-pink-50/30 py-32"
>
	<!-- Cherry Blossom Background Effect -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')] opacity-10"
		></div>
		<!-- Decorative Circles -->
		<div
			class="animate-blob absolute -top-20 -right-20 h-96 w-96 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-2000 absolute top-40 -left-20 h-72 w-72 rounded-full bg-red-200 opacity-30 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-4000 absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-3xl filter"
		></div>
	</div>

	<div
		class="relative z-10 container mx-auto flex flex-col-reverse items-center gap-12 px-8 md:flex-row md:gap-20 md:px-16 lg:px-24"
	>
		<div class="relative flex-1 text-center md:text-left">
			<h2 class="animate-fade-in-up mb-4 font-medium tracking-widest text-pink-600 uppercase">
				Portfolio
			</h2>
			<h1
				class="mb-8 min-h-25 font-display text-4xl leading-tight font-bold text-gray-900 md:min-h-47.5 md:text-7xl"
			>
				Hi!
				<span class="bg-linear-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
					<TypeWriter texts={typewriterTexts} />
				</span>
			</h1>
			<p class="mx-auto mb-8 max-w-lg leading-relaxed text-gray-600 md:mx-0">
				{personalInfo.description}
			</p>

			<div class="flex flex-wrap justify-center gap-4 md:justify-start">
				<a
					href="#projects"
					class="transform rounded-full bg-pink-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-pink-700 hover:shadow-pink-500/30"
				>
					View Work
				</a>
				<a
					href="mailto:{personalInfo.email}"
					class="rounded-full border-2 border-pink-600 px-8 py-3 font-medium text-pink-600 transition-all hover:bg-pink-50"
				>
					Contact Me
				</a>
			</div>

			<div class="mt-12 flex justify-center gap-6 md:hidden md:justify-start">
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-gray-900"
					aria-label="GitHub Profile"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
				<a
					href={personalInfo.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-blue-700"
					aria-label="LinkedIn Profile"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
			</div>
		</div>

		<div class="relative flex flex-1 justify-center">
			<div class="relative h-72 w-72 md:h-96 md:w-96">
				<div
					class="animate-blob absolute inset-0 rounded-full bg-pink-200 opacity-70 mix-blend-multiply blur-xl filter"
				></div>
				<div
					class="absolute inset-0 z-10 overflow-hidden rounded-full border-4 border-white shadow-2xl"
				>
					<img
						src={personalInfo.profilePic}
						alt={personalInfo.name}
						class="h-full w-full object-cover"
					/>
				</div>
				<!-- Decorative floral elements could go here -->
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}
	.animate-blob {
		animation: blob 7s infinite;
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
