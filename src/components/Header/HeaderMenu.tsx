'use client'

import { headerLinks } from '@/data/headerMenu'
import PhoneIcon from '@mui/icons-material/Phone'
import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const HeaderMenu = () => {
	return (
		<Stack direction='row' spacing={3} alignItems='center'>
			{headerLinks.map(item => (
				<Link key={item.href} href={item.href}>
					<Typography
						sx={{
							color: '#fff',
							fontWeight: 500,
							transition: 'all 0.2s ease-in-out',
							cursor: 'pointer',
							'&:hover': {
								opacity: 0.85,
								transform: 'translateY(-1px)',
							},
						}}
					>
						{item.label}
					</Typography>
				</Link>
			))}

			<Button
				variant='contained'
				startIcon={<PhoneIcon />}
				href='tel:0800755774'
				sx={{
					backgroundColor: '#fff',
					color: '#2F2F2F',
					fontWeight: 600,
					textTransform: 'none',
					px: 2.5,
					height: 44,
					borderRadius: 0.6,
					minWidth: {
						xs: 'auto',
						sm: 140,
						md: 180,
					},
					'&:hover': {
						backgroundColor: '#f7f7f7',
					},
				}}
			>
				Зателефонувати нам
			</Button>
		</Stack>
	)
}

export default HeaderMenu
