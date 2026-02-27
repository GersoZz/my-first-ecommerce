import { useEffect, useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'

function App() {
  const [showPromo, setShowPromo] = useState(true)

  const [productsData, setProductsData] = useState([])
  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsSnacksData, setProductsSnacksData] = useState([])

  useEffect(() => {
    // Productos Disponibles
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=6')
      .then((response) => response.json())
      .then((data) => {
        /* Ctrl Alt L */
        console.log('🚀 ~ App ~ data:', data)

        const productsAdapteds = data.map((product) => {
          // Desestructuracion de Javascript
          const { id, title, price, description, images } = product

          // Asignando en base al nombre
          const productAdapted = {
            id,
            title,
            price,
            description,
            imageUrl: images[0],
          }

          return productAdapted
        })

        setProductsData(productsAdapteds)
      })
      .catch((error) => console.error(error))

    // Productos Sugeridos
    fetch('https://api.escuelajs.co/api/v1/products?offset=6&limit=2')
      .then((response) => response.json())
      .then((data) => {
        /* Ctrl Alt L */
        console.log('🚀 ~ App ~ data:', data)

        const productsAdapteds = data.map((product) => {
          const { id, title, price, description, images } = product

          const productAdapted = {
            id,
            title,
            price,
            description,
            imageUrl: images[0],
          }

          return productAdapted
        })

        setProductsSuggestedData(productsAdapteds)
      })
      .catch((error) => console.error(error))

    // Productos Snacks
    fetch('https://api.escuelajs.co/api/v1/categories/19/products?offset=0&limit=6')
      .then((response) => response.json())
      .then((data) => {
        /* Ctrl Alt L */
        console.log('🚀 ~ App ~ data:', data)

        const productsAdapteds = data.map((product) => {
          const { id, title, price, description, images } = product

          const productAdapted = {
            id,
            title,
            price,
            description,
            imageUrl: images[0],
          }

          return productAdapted
        })

        setProductsSnacksData(productsAdapteds)
      })
      .catch((error) => console.error(error))
  }, [])

  const onClose = () => {
    setShowPromo(false)
  }

  return (
    <>
      <Header />
      {showPromo && <PromoBanner onClose={onClose} />}
      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Estos son los productos que puedes comprar</p>
        <ProductList productsData={productsData} />
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Explora nuestra selección de productos</p>
        <ProductList productsData={productsSuggestedData} />
      </Container>

      <Container title="Productos snacks">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Explora nuestra selección de snacks</p>
        <ProductList productsData={productsSnacksData} />
      </Container>
    </>
  )
}

export default App
