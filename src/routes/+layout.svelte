<script lang="ts">
	import './layout.css';
    import Sakura from '$lib/components/Sakura.svelte';

	let { children } = $props();
</script>

<Sakura />

{@render children()}
