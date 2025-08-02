import ThemeProvider from '@/components/ThemeProvider'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata = {
	title: 'Реклама & Шоколад',
	description: 'Виробник брендованої продукції для бізнесу',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uk'>
			<body className={inter.variable}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
