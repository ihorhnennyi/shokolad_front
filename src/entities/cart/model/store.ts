'use client'

import type { Product } from '@/types/product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = { product: Product; quantity: number }
type CartState = {
	items: CartItem[]
	add: (product: Product, qty?: number) => void
	remove: (productId: string | number) => void
	setQty: (productId: string | number, qty: number) => void
	clear: () => void
	total: () => number
}

export const useCart = create<CartState>()(
	persist(
		(set, get) => ({
			items: [],
			add: (product, qty = 1) => {
				const items = [...get().items]
				const i = items.findIndex(
					x => String(x.product.id) === String(product.id)
				)
				set({
					items: get().items.map(x =>
						String(x.product.id) === String(product.id)
							? { ...x, quantity: x.quantity + qty }
							: x
					),
				})
			},
			remove: productId =>
				set({
					items: get().items.filter(
						x => String(x.product.id) !== String(productId)
					),
				}),
			setQty: (productId, qty) => {
				if (qty <= 0)
					return set({
						items: get().items.filter(
							x => String(x.product.id) !== String(productId)
						),
					})
				set({
					items: get().items.map(x =>
						String(x.product.id) === String(productId)
							? { ...x, quantity: qty }
							: x
					),
				})
			},
			clear: () => set({ items: [] }),
			total: () =>
				get().items.reduce((s, x) => s + x.product.price * x.quantity, 0),
		}),
		{ name: 'cart_v1' }
	)
)
