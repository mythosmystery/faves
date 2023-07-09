import { desc, sql } from 'drizzle-orm'
import { numbers } from '../../lib/schema'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals: { db } }) => {
	const data = await db
		.select({ number: numbers.number, count: sql<number>`count(*)` })
		.from(numbers)
		.groupBy(numbers.number)
		.orderBy(desc(sql`count(*)`))
		.limit(10)
		.execute()

	return {
		counts: data.map(({ count }) => +count),
		numbers: data.map(({ number }) => number)
	}
}) satisfies PageServerLoad
