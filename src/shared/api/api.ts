const serverBase =
	process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || ''
const clientBase = process.env.NEXT_PUBLIC_API_BASE_URL || ''

export const getBaseURL = (isServer: boolean) =>
	isServer ? serverBase : clientBase

export async function apiGet<T>(
	path: string,
	init?: RequestInit,
	isServer = true
): Promise<T> {
	const base = getBaseURL(isServer)
	const res = await fetch(`${base}${path}`, {
		...init,
		cache: isServer ? 'no-store' : 'default',
		headers: {
			...(init?.headers || {}),
			Accept: 'application/json',
		},
	})
	if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
	return res.json() as Promise<T>
}
