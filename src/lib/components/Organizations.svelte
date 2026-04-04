<script lang="ts">
	import { organizations } from '$lib/data';
	import AnimalDecoration from './AnimalDecoration.svelte';
</script>

<section id="organizations" class="bg-pink-50/30 py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-2 font-medium tracking-widest text-pink-600 uppercase">Community</h2>
			<h3 class="font-display text-4xl font-bold text-gray-900">Organizations</h3>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-300"></div>
			<p class="mx-auto mt-8 max-w-2xl leading-relaxed text-gray-600">
				Since 2023, my path in computer science has been defined by a deep curiosity for technology
				and a search for new challenges. My experiences with SPARCS and various organizations have
				shaped who I am today.
			</p>
		</div>

		<div class="mx-auto max-w-4xl space-y-8">
			{#each organizations as org, i}
				<div
					class="group relative flex flex-col items-center gap-8 rounded-3xl border border-pink-100 bg-linear-to-br from-white to-pink-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl md:flex-row md:items-start md:p-10"
				>
					<AnimalDecoration class="-top-8 -right-4 z-30 w-20" />

					<!-- Logo Column -->
					<div
						class="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-105"
					>
						<img src={org.logo} alt={org.name} class="h-full w-full object-contain" />
					</div>

					<!-- Content Column -->
					<div class="w-full flex-1 text-center md:text-left">
						<h4 class="mb-6 font-display text-2xl leading-tight font-bold text-gray-900">
							{org.name}
						</h4>

						<!-- Roles Timeline -->
						<div class="relative space-y-6 pl-4 md:pl-2">
							{#each org.roles as role}
								<div
									class="relative border-l-2 border-pink-200 pb-2 pl-8 last:border-l-0 md:last:border-l-2"
								>
									<div
										class="absolute top-1.5 -left-2.25 h-4 w-4 rounded-full bg-pink-400 ring-4 ring-white"
									></div>
									<div class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
										<p class="text-lg font-bold text-gray-800">{role.title}</p>
										<p
											class="inline-block rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-600 md:inline"
										>
											{role.date}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
