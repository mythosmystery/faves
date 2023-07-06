// See https://kit.svelte.dev/docs/types#app

import type { db } from './lib/db'
import ApexCharts from 'apexcharts'
// for information about these interfaces
declare global {
	interface Window {
		ApexCharts: typeof ApexCharts
	}
	namespace App {
		// interface Error {}
		interface Locals {
			db: typeof db
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
