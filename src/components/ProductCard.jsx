import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ id, title, price, description, imageUrl = 'https://picsum.photos/600/400' }) {
  const { handleAddToCart } = useContext(CartContext)

  const [isAdded, setIsAdded] = useState(false)
  // console.log('isAdded', isAdded)

  const handleClick = () => {
    setIsAdded((isAdded) => !isAdded)
    handleAddToCart(!isAdded)
  }

  return (
    <div id={`card-${id}`} className="card">
      <Link to={`/product/${id}`} className="card-link">
        <img src={imageUrl} alt={title} className="card-image" />
      </Link>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className={`card-button ${isAdded ? 'added' : ''}`} onClick={() => handleClick()} /* !isAdded */>
            {isAdded ? 'Agregado' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
