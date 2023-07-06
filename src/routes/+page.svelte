<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData

	$: outOfRange = form?.error?.toLowerCase().includes('out of range')
</script>

<div class="flex flex-col">
	<h1 class="text-6xl font-bold text-slate-100 mt-24">What's your favorite number?</h1>
	<form method="post" use:enhance>
		<input
			type="number"
			name="number"
			autofocus
			class="text-6xl p-4 rounded-2xl bg-inherit focus:outline-none border-2 border-slate-100 text-slate-100 mt-24"
		/>
	</form>
	{#if form && !form?.success}
		{#if outOfRange}
			<p class="text-3xl font-semibold text-red-300 mt-4">That number is wau too big!</p>
		{:else}
			<p class="text-2xl font-semibold text-red-300 mt-4">Sorry! An error occurred</p>
		{/if}
	{/if}
</div>
