'use client'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import {
	createContext,
	PropsWithChildren,
	useContext,
	useMemo,
	useState,
} from 'react'

type Mode = 'light' | 'dark'
type ColorModeCtx = { mode: Mode; toggle: () => void }
const ColorModeContext = createContext<ColorModeCtx>({
	mode: 'dark',
	toggle: () => {},
})

export function useColorMode() {
	return useContext(ColorModeContext)
}

export function ColorModeProvider({ children }: PropsWithChildren) {
	const [mode, setMode] = useState<Mode>('dark')

	const value = useMemo<ColorModeCtx>(
		() => ({
			mode,
			toggle: () => setMode(m => (m === 'light' ? 'dark' : 'light')),
		}),
		[mode]
	)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === 'dark'
						? {
								background: { default: '#0b0f17', paper: '#121826' },
						  }
						: {}),
				},
				shape: { borderRadius: 12 },
				components: {
					MuiContainer: {
						defaultProps: { maxWidth: 'lg' },
					},
				},
			}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
