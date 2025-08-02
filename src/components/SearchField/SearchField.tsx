'use client'

import SearchIcon from '@mui/icons-material/Search'
import { Button, InputBase, Paper, useTheme } from '@mui/material'

const SearchField = () => {
	const theme = useTheme()

	return (
		<Paper
			component='form'
			sx={{
				display: 'flex',
				alignItems: 'center',
				flex: 1,
				maxWidth: 700,
				height: 44,
				borderRadius: 0.75,
				pl: 2,
				boxShadow: '0 0 4px rgba(0,0,0,0.1)',
				overflow: 'hidden',
			}}
		>
			<SearchIcon sx={{ color: theme.palette.text.primary, opacity: 0.5 }} />
			<InputBase
				placeholder='Я шукаю...'
				sx={{ ml: 1, flex: 1 }}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				sx={{
					color: '#fff',
					px: 3,
					height: '100%',
					borderRadius: 0,
					borderTopRightRadius: theme.shape.borderRadius,
					borderBottomRightRadius: theme.shape.borderRadius,
					textTransform: 'none',
					fontWeight: 600,
					'&:hover': {
						bgcolor: theme.palette.secondary.dark,
					},
				}}
			>
				Шукати
			</Button>
		</Paper>
	)
}

export default SearchField
