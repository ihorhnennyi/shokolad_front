'use client'

import SearchIcon from '@mui/icons-material/Search'
import { Button, InputBase, Paper, useTheme } from '@mui/material'

const SearchField = () => {
	const theme = useTheme()
	const borderRadius = `theme.shape.borderRadius / 0.75`

	return (
		<Paper
			component='form'
			sx={{
				display: 'flex',
				alignItems: 'center',
				flex: 1,
				maxWidth: 700,
				height: 44,
				borderRadius,
				pl: 2,
				boxShadow: '0 0 4px rgba(0,0,0,0.1)',
				overflow: 'hidden',
				bgcolor: theme.palette.background.paper,
			}}
		>
			<SearchIcon
				sx={{
					color: theme.palette.text.primary,
					opacity: 0.5,
				}}
			/>
			<InputBase
				placeholder='Що ви шукаєте?'
				sx={{ ml: 1, flex: 1 }}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				sx={{
					height: '100%',
					px: 3,
					borderRadius: 0,
					borderTopRightRadius: borderRadius,
					borderBottomRightRadius: borderRadius,
					textTransform: 'none',
					fontWeight: 600,
					boxShadow: 'none',
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
