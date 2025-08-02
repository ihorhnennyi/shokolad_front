import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#2B7A78',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#3AAFA9',
			contrastText: '#ffffff',
		},
		background: {
			default: '#F4F8F7',
			paper: '#ffffff',
		},
		text: {
			primary: '#17252A',
			secondary: '#526C6B',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
					borderRadius: 6,
					boxShadow: 'none',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 6,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: '#2B7A78',
				},
			},
		},
	},
})

export default theme
