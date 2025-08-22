import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
	return (
		<Stack spacing={2}>
			<Typography variant='h4' fontWeight={700}>
				Магазин
			</Typography>
			<Card>
				<CardContent>
					<Typography color='text.secondary' mb={2}>
						Стартовый шаблон готов. Перейди в каталог, чтобы увидеть список
						товаров.
					</Typography>
					<Button component={Link} href='/catalog' variant='contained'>
						Открыть каталог
					</Button>
				</CardContent>
			</Card>
		</Stack>
	)
}
