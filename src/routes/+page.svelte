<script lang="ts">
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<div class="flex flex-col">
	<h1 class="text-6xl font-bold text-slate-100 mt-24">What's your favorite number?</h1>
	<form method="post">
		<input
			type="number"
			name="number"
			class="text-6xl font-bold p-4 rounded-2xl bg-inherit focus:outline-none border-2 border-slate-100 text-slate-100 mt-24"
		/>
	</form>
	{#if form && !form?.success}
		<p class="text-2xl text-red-500 mt-4">{form?.error}</p>
	{/if}
</div>
