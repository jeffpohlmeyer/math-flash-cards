<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import Icon from '@iconify/svelte';

	let solutionSeen = false;

	$: solution = $page.params.a * $page.params.b;
	$: disabled = solutionSeen ? '' : 'disabled';
	const handleBack = async () => {
		if (solutionSeen) {
			solutionSeen = false;
		}
	};

	const handleForward = async () => {
		if (!solutionSeen) {
			solutionSeen = true;
		} else {
			const a = Math.floor(Math.random() * 11);
			const b = Math.floor(Math.random() * 11);
			solutionSeen = false;
			await goto(`/multiply/${a}/${b}`);
		}
	};
</script>

<div
	class="flex flex-col sm:flex-row text-9xl items-center text-gray-50 justify-around sm:justify-between w-full h-full sm:px-4 md:px-8 lg:px-16"
>
	<button {disabled} class={solutionSeen ? '' : 'text-orange-500'} on:click={handleBack}>
		<Icon icon="heroicons:chevron-left" class="h-20 w-20" />
	</button>
	{#if !solutionSeen}
		<div class="flex items-center space-x-12">
			<span>{$page.params.a}</span>
			<Icon icon="heroicons:x-mark-solid" class="h-20 w-20" />
			<span>{$page.params.b}</span>
		</div>
	{:else}
		{solution}
	{/if}
	<button on:click={handleForward}>
		<Icon icon="heroicons:chevron-right" class="h-20 w-20" />
	</button>
</div>
