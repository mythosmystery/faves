<script lang="ts">
	import Chart from '$lib/components/Chart.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	let barOptions = {
		chart: {
			type: 'bar',
			zoom: { enabled: true }
		},
		series: [
			{
				name: 'count',
				data: data.counts
			}
		],
		xaxis: {
			categories: data.numbers,
			tickPlacement: 'on'
		}
	}

	let pieOptions = {
		chart: {
			type: 'donut'
		},
		series: data.counts,
		labels: data.numbers
	}
</script>

<div class="flex flex-col h-full w-full items-center">
	<div class="text-6xl text-white">most popular numbers!</div>
	<div class="grid grid-cols-2 gap-4 h-full w-full mt-20">
		<Chart options={barOptions} />
		<Chart options={pieOptions} />
	</div>
</div>
