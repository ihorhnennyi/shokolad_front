'use client'

import { useColorMode } from '@/lib/theme'
import { useCart } from '@/store/useCart'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
	const { mode, toggle } = useColorMode()
	const count = useCart(s => s.items.reduce((n, x) => n + x.quantity, 0))

	// Флаг гидрации, чтобы серверный HTML совпадал с клиентским
	const [hydrated, setHydrated] = useState(false)
	useEffect(() => setHydrated(true), [])

	return (
		<AppBar
			position='sticky'
			color='transparent'
			elevation={0}
			sx={{ borderBottom: 1, borderColor: 'divider' }}
		>
			<Toolbar sx={{ gap: 2 }}>
				<Typography
					variant='h6'
					component={Link}
					href='/'
					sx={{ mr: 2, fontWeight: 700 }}
				>
					MyShop
				</Typography>

				<Box sx={{ display: 'flex', gap: 2 }}>
					<Typography
						component={Link}
						href='/catalog'
						sx={{ '&:hover': { textDecoration: 'underline' } }}
					>
						Каталог
					</Typography>
					<Typography
						component={Link}
						href='/about'
						sx={{ '&:hover': { textDecoration: 'underline' } }}
					>
						О нас
					</Typography>
					<Typography
						component={Link}
						href='/contacts'
						sx={{ '&:hover': { textDecoration: 'underline' } }}
					>
						Контакты
					</Typography>
				</Box>

				<Box sx={{ flex: 1 }} />

				<IconButton onClick={toggle} aria-label='toggle theme'>
					{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>

				<IconButton component={Link} href='/cart' aria-label='cart'>
					<Badge badgeContent={hydrated ? count : 0} color='primary' showZero>
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
