export const metadata = {
	title: 'My Shop',
	description: 'Next.js + TypeScript storefront',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body>
				<div className='container'>{children}</div>
			</body>
		</html>
	)
}
