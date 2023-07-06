import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export const raise = (message: string) => {
	throw new Error(message)
}

export default {
	schema: './src/lib/schema.ts',
	out: './drizzle',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_URL ?? raise('TURSO_URL is not set'),
		authToken: process.env.TURSO_AUTH_TOKEN ?? raise('TURSO_AUTH_TOKEN is not set')
	}
} satisfies Config
