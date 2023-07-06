import { numbers } from '../lib/schema'
import type { Actions } from './$types'

export const actions = {
	default: async ({ request, locals: { db } }) => {
		const data = await request.formData()

		const number = Number(data.get('number'))
		const ip = request.headers.get('x-forwarded-for') || request.headers.get('host') || 'unknown'
		const useragent = request.headers.get('user-agent')

		const values = { number, ip, useragent }

		try {
			await db.insert(numbers).values(values).run()
			return { success: true, body: values }
		} catch (e) {
			return { success: false, error: JSON.stringify(e) }
		}
	}
} satisfies Actions
