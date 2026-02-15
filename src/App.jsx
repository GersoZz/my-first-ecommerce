import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [showPromo, setShowPromo] = useState(true)

  const productsData = [
    {
      title: 'Zapatillas Runing',
      price: 120,
      description: 'Las mejores zapatillas',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
      title: 'Reloj de Tiempo',
      price: 200,
      description: 'El mejor reloj de Tiempo',
      imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c',
    },
    {
      title: 'Mouse RGB',
      price: 100,
      description: 'El mejor mouse RGB',
    },
  ]

  const onClose = () => {
    setShowPromo(false)
  }

  const handleAddToCart = (isAdded) => {
    if (isAdded === true) {
      setCartCount((count) => count + 1)
    }

    if (isAdded === false) {
      setCartCount((count) => count - 1)
    }
  }

  return (
    <>
      <Header cartCount={cartCount} />
      {showPromo && <PromoBanner onClose={onClose} />}

      <div className="card-list">
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  )
}

export default App
