import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <ProductCard 
        title= "Zapatillas Runing"
        price="120"
        description="Las mejores zapatillas"
        imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      />

      <ProductCard 
        title="Reloj de Tiempo"
        price="200"
        description="El mejor reloj de Tiempo"
        imageUrl="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c"
      />

      <ProductCard 
        title="Mouse RGB"
        price="100"
        description="El mejor mouse RGB"
      />
    </>
  )
}

export default App
