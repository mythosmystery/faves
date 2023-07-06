<script lang="ts">
	import Chart from '$lib/components/Chart.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	let options = {
		chart: {
			type: 'bar',
			zoom: { enabled: true }
		},
		series: [
			{
				name: 'sales',
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
			}
		],
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
			tickPlacement: 'on'
		}
	}
</script>

<div class="flex flex-col h-full w-full items-center">
	<div class="text-6xl text-white">results</div>
	<Chart {options} />
</div>
