<script lang="ts">
    import { personalInfo } from '$lib/data';
    import AnimalDecoration from './AnimalDecoration.svelte';
    import { TypeWriter } from 'svelte-typewrite';

    const typewriterTexts = [
        "I'm Mark Jaily Peña",
        "I'm a Developer",
        "I'm an AWS Certified",
        "I'm into Cybersec",
        "I Turn Ideas into Reality",
        "I Build Scalable Apps",
        "I'm a Cat Lover",
        "I'm a Casual Gamer",
        "I'm an Avid Learner"
    ];
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-50/30 py-32">
    <!-- Cherry Blossom Background Effect -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')]"></div>
        <!-- Decorative Circles -->
        <div class="absolute -top-20 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute top-40 -left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div class="flex-1 text-center md:text-left relative">
            <h2 class="text-pink-600 font-medium tracking-widest mb-4 uppercase animate-fade-in-up">Portfolio</h2>
            <h1 class="text-4xl md:text-7xl font-bold text-gray-900 mb-8 font-serif leading-tight min-h-25 md:min-h-47.5">
                Hi! 
                <span class="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-red-500">
                    <TypeWriter texts={typewriterTexts} />
                </span>
            </h1>
            <p class="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                {personalInfo.description}
            </p>
            
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#projects" class="px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1">
                    View Work
                </a>
                <a href="mailto:{personalInfo.email}" class="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-all">
                    Contact Me
                </a>
            </div>

            <div class="mt-12 flex gap-6 justify-center md:justify-start md:hidden">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="GitHub Profile">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn Profile">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
                </a>
            </div>
        </div>

        <div class="flex-1 flex justify-center relative">
            <div class="relative w-72 h-72 md:w-96 md:h-96">
                <div class="absolute inset-0 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute inset-0 border-4 border-white rounded-full overflow-hidden shadow-2xl z-10">
                    <img src={personalInfo.profilePic} alt={personalInfo.name} class="w-full h-full object-cover" />
                </div>
                <!-- Decorative floral elements could go here -->
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
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
