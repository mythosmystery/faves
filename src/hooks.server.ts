import type { Handle } from '@sveltejs/kit'
import { db } from './lib/db'

export const handle = (async ({ event, resolve }) => {
	event.locals.db = db

	return resolve(event)
}) satisfies Handle
