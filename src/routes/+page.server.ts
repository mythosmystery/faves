import { logEvent } from '../lib/helpers'
import { numbers } from '../lib/schema'
import type { Actions } from './$types'

export const actions = {
	default: async ({ request, locals: { db }, getClientAddress }) => {
		const data = await request.formData()

		const number = Number(data.get('number'))
		const ip = getClientAddress()
		const useragent = request.headers.get('user-agent')

		const values = { number, ip, useragent }
		logEvent({ data: values, feature: 'numbers', action: 'insert' })

		try {
			await db.insert(numbers).values(values).run()
			return { success: true, body: values }
		} catch (e) {
			return { success: false, error: JSON.stringify(e) }
		}
	}
} satisfies Actions
