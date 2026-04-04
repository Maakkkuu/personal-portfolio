<script lang="ts">
	import { personalInfo } from '$lib/data';
</script>

<footer class="border-t border-gray-100 bg-white py-8">
	<div class="flex w-full flex-col items-center justify-between gap-16 px-6 md:flex-row md:px-10">
		<div class="text-center md:text-left">
			<h3 class="font-display text-xl font-bold text-gray-900">Makku.</h3>
			<p class="mt-1 text-sm text-gray-500">Building digital experiences with heart.</p>
		</div>

		<div class="flex flex-col items-center gap-2 md:items-end">
			<p class="text-sm text-gray-400">
				Email: <a href="mailto:{personalInfo.email}" class="text-pink-600 hover:underline"
					>{personalInfo.email}</a
				>
			</p>
			<p class="text-sm text-gray-400">
				&copy; 2025 {personalInfo.name}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
