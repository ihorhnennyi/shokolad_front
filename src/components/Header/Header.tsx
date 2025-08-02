'use client'

import { Box, Container, Stack } from '@mui/material'
import Logo from '../Logo/Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
	return (
		<Box
			sx={{
				bgcolor: '#64c1a7',
				py: 0,
				height: 70,
				display: 'flex',
				alignItems: 'center',
				boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
			}}
		>
			<Container
				maxWidth='xl'
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
					pt: 0.75,
					pb: 0.5,
				}}
			>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					sx={{ width: '100%' }}
				>
					<Logo />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<HeaderMenu />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

export default Header
