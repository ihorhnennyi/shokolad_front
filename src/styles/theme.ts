import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#377A76',
			contrastText: '#fff',
		},
		secondary: {
			main: '#53C2A0',
		},
		background: {
			default: '#E9F1EF',
			paper: '#ffffff',
		},
		text: {
			primary: '#2F2F2F',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	shape: {
		borderRadius: 16,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
					borderRadius: 12,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 16,
				},
			},
		},
	},
})

export default theme
