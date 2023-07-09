<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData

	$: outOfRange = form?.error?.toLowerCase().includes('out of range')
</script>

<div class="flex flex-col items-center">
	<h1 class="md:text-6xl text-center text-4xl font-bold text-blue-200 mt-24">
		What's your favorite number?
	</h1>
	<form method="post" use:enhance>
		<input
			type="number"
			name="number"
			placeholder="Enter a number"
			required
			autofocus
			class="text-4xl sm:text-6xl lg:text-8xl p-6 md:p-10 xl:p-12 rounded-3xl bg-inherit focus:outline-none border-2 lg:border-4 border-blue-200 text-slate-100 mt-24"
		/>
	</form>
	{#if form && !form?.success}
		{#if outOfRange}
			<p class="text-3xl font-semibold text-red-300 mt-4">That number is way too big!</p>
		{:else}
			<p class="text-2xl font-semibold text-red-300 mt-4">Sorry! An error occurred</p>
		{/if}
	{/if}
	<a href="/results" class="text-4xl hover:text-purple-300 font-semibold text-blue-200 mt-8"
		>See results</a
	>
</div>
