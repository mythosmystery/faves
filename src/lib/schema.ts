import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import type { InferModel } from 'drizzle-orm'

export const numbers = sqliteTable('numbers', {
	id: integer('id').primaryKey(),
	number: integer('number').notNull(),
	ip: text('ip').notNull(),
	useragent: text('useragent')
})

export type Number = InferModel<typeof numbers>
export type InsertNumber = InferModel<typeof numbers, 'insert'>
