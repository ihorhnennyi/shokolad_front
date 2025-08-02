import ThemeProvider from '@/providers/ThemeProvider'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import BannerSlider from '@/components/BannerSlider/BannerSlider'
import Header from '@/layouts/Header/Header'
import CatalogSearchPanel from '@/modules/CatalogSearchPanel/CatalogSearchPanel'

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
				<ThemeProvider>
					<Header />
					<CatalogSearchPanel />
					<BannerSlider />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
