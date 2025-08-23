'use client'

import { apiGet } from '@/lib/api'
import { useCart } from '@/store/useCart'
import type { Product } from '@/types/product'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function CartPage() {
	const params = useSearchParams()
	const add = useCart(s => s.add)
	const items = useCart(s => s.items)
	const total = useCart(s => s.total)()

	useEffect(() => {
		const toAdd = params.get('add')
		if (!toAdd) return
		;(async () => {
			try {
				const p = await apiGet<Product>(
					`/api/products/${toAdd}`,
					undefined,
					false
				)
				add(p, 1)
			} catch {}
		})()
	}, [params])

	return (
		<Box>
			<Typography variant='h5' fontWeight={700} mb={2}>
				Корзина
			</Typography>

			{items.length === 0 ? (
				<Typography color='text.secondary'>
					Корзина пуста. <Link href='/catalog'>Перейти в каталог</Link>
				</Typography>
			) : (
				<>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						{items.map(({ product, quantity }) => (
							<Box
								key={product.id}
								sx={{
									display: 'flex',
									gap: 2,
									alignItems: 'center',
									borderBottom: 1,
									borderColor: 'divider',
									py: 1,
								}}
							>
								<Typography sx={{ flex: 1 }}>{product.title}</Typography>
								<Typography width={120} color='text.secondary'>
									{product.price.toLocaleString('uk-UA', {
										style: 'currency',
										currency: 'UAH',
									})}
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
									<Button
										size='small'
										onClick={() =>
											useCart.getState().setQty(product.id, quantity - 1)
										}
									>
										-
									</Button>
									<Typography>{quantity}</Typography>
									<Button
										size='small'
										onClick={() =>
											useCart.getState().setQty(product.id, quantity + 1)
										}
									>
										+
									</Button>
								</Box>
								<Button
									color='error'
									size='small'
									onClick={() => useCart.getState().remove(product.id)}
								>
									Удалить
								</Button>
							</Box>
						))}
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
						<Button color='inherit' onClick={() => useCart.getState().clear()}>
							Очистить
						</Button>
						<Typography variant='h6'>
							Итого:{' '}
							{total.toLocaleString('uk-UA', {
								style: 'currency',
								currency: 'UAH',
							})}
						</Typography>
					</Box>

					<Button variant='contained' sx={{ mt: 2 }} href='/checkout'>
						Оформить заказ
					</Button>
				</>
			)}
		</Box>
	)
}
