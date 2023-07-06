import type { InferModel } from 'drizzle-orm'
import { mysqlTable, text, int, serial } from 'drizzle-orm/mysql-core'

export const numbers = mysqlTable('numbers', {
	id: serial('id').primaryKey(),
	number: int('number').notNull(),
	ip: text('ip').notNull(),
	useragent: text('useragent')
})

export type Number = InferModel<typeof numbers>
export type InsertNumber = InferModel<typeof numbers, 'insert'>
