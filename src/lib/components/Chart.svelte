<script lang="ts">
	import { onMount } from 'svelte'

	let divElement: HTMLDivElement

	export let options: any

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts')
		const chart = new ApexCharts(divElement, options)
		chart.render()
	})
</script>

<div bind:this={divElement} class="h-full w-full" />
