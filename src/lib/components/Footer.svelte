<script lang="ts">
    import { personalInfo } from '$lib/data';
    const year = new Date().getFullYear();
</script>

<footer class="bg-white border-t border-gray-100 py-12">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
            <h3 class="text-xl font-bold text-gray-900 font-serif">Makku.</h3>
            <p class="text-gray-500 text-sm mt-1">Building digital experiences with heart.</p>
        </div>

        <div class="flex flex-col items-center md:items-end">
            <a href="mailto:{personalInfo.email}" class="text-lg font-medium text-pink-600 hover:text-pink-700 transition-colors mb-2">
                {personalInfo.email}
            </a>
            <p class="text-gray-400 text-sm">
                &copy; {year} {personalInfo.name}. All rights reserved.
            </p>
        </div>
    </div>
</footer>
