import Header from '@/components/layout/Header'
import { ColorModeProvider } from '@/lib/theme'
import { Container } from '@mui/material'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
				<ColorModeProvider>
					<Header />
					<Container sx={{ py: 3 }}>{children}</Container>
				</ColorModeProvider>
			</body>
		</html>
	)
}
