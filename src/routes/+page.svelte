<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Certifications from '$lib/components/Certifications.svelte';
    import Organizations from '$lib/components/Organizations.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Makku | Portfolio</title>
    <meta name="description" content="Portfolio of Mark Jaily Peña - Developer, Cloud Enthusiast, and Cybersecurity Student" />
</svelte:head>

<div class="bg-white min-h-screen text-gray-900 selection:bg-pink-200 selection:text-pink-900">
    <Navbar />
    <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Organizations />
    </main>
    <Footer />
</div>

