'use client'

import theme from '@/styles/theme'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import Header from './Header/Header'

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			{children}
		</MuiThemeProvider>
	)
}
