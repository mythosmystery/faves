export const raise = (message: string) => {
	throw new Error(message)
}

export const logEvent = (event: { data: Record<string, any>; feature: string; action: string }) => {
	console.log({ ...event, app: 'faves' })
}
