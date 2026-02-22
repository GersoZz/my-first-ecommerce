import ProductCard from './ProductCard'

function ProductList({ productsData }) {
  return (
    <div className="card-list">
      {productsData.map((product, index) => (
        <ProductCard
          id={product.id}
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}

export default ProductList
