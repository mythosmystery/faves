import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export const raise = (message: string) => {
	throw new Error(message)
}

export default {
	schema: './src/lib/schema.ts',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		connectionString: process.env.DATABASE_URI ?? raise('DATABASE_URI not set')
	}
} satisfies Config
