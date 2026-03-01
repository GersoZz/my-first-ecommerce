import React from 'react'
import HomePage from './HomePage'

export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))
export const CartPage = React.lazy(() => import('./CartPage'))

export { HomePage }
