<script lang="ts">
    import { personalInfo } from '$lib/data';
</script>

<footer class="bg-white border-t border-gray-100 py-8">
    <div class="w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-16">
        <div class="text-center md:text-left">
            <h3 class="text-xl font-bold text-gray-900 font-display">Makku.</h3>
            <p class="text-gray-500 text-sm mt-1">Building digital experiences with heart.</p>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
            <p class="text-gray-400 text-sm">
                Email: <a href="mailto:{personalInfo.email}" class="text-pink-600 hover:underline">{personalInfo.email}</a>
            </p>
            <p class="text-gray-400 text-sm">
                &copy; 2025 {personalInfo.name}. All rights reserved.
            </p>
        </div>
    </div>
</footer>
