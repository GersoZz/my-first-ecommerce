import './AddProductPage.css'
import { API_ENDPOINTS } from '../utils/constants'
import useFetch from '../hooks/useFetch'
import usePost from '../hooks/usePost'
import { useEffect, useState } from 'react'

function AddProductPage() {
  const { data, isLoading: loadingCategories, error } = useFetch(API_ENDPOINTS.CATEGORIES)

  const categories = Array.isArray(data) ? data : []
  const categoriesError = error ? 'Error al cargar categorías' : null

  const [formKey, setFormKey] = useState(0)
  const [titleValue, setTitleValue] = useState('')
  const [titleError, setTitleError] = useState('')
  const [titleTouched, setTitleTouched] = useState(false)

  const {
    execute: createProduct,
    data: createdProduct,
    isLoading: submitting,
    error: submitError,
  } = usePost(API_ENDPOINTS.PRODUCTS)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (titleValue.trim().length < 6) {
      setTitleError('El título debe tener al menos 6 caracteres')
      return
    }

    const formData = new FormData(e.target)
    const productData = {
      title: formData.get('title'),
      price: parseFloat(formData.get('price')),
      categoryId: formData.get('categoryId'),
      description: formData.get('description'),
      images: [formData.get('imageUrl')],
    }

    console.log('Producto a guardar:', productData)
    createProduct(productData)
  }

  useEffect(() => {
    if (!createdProduct) return
    setFormKey((prevKey) => prevKey + 1)
    handleReset()
  }, [createdProduct])

  const handleTitleChange = (event) => {
    const value = event.target.value
    setTitleValue(value)

    if (value.trim().length < 6) {
      setTitleError('El título debe tener al menos 6 caracteres')
    } else {
      setTitleError('')
    }
  }

  const handleTitleBlur = () => {
    setTitleTouched(true)

    if (titleValue.trim().length < 6) {
      setTitleError('El título debe tener al menos 6 caracteres')
    } else {
      setTitleError('')
    }
  }

  const handleReset = () => {
    setTitleValue('')
    setTitleError('')
    setTitleTouched(false)
  }

  return (
    <div className="add-product-page">
      <div className="add-product-card">
        <div className="add-product-header">
          <p className="add-product-eyebrow">Panel de Creación de Productos</p>
          <h1>Agregar nuevo producto</h1>
          <p className="add-product-subtitle">Completa los datos del producto para publicarlo en la tienda.</p>
        </div>
        <form className="add-product-form" onSubmit={handleSubmit} onReset={handleReset} key={formKey}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Zapatillas Voladoras"
                value={titleValue}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                required
              />
              {titleTouched && titleError && <p className="form-helper error">{titleError}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="price">Precio</label>
              <input type="number" id="price" name="price" placeholder="120" min="0" step="1" required />
            </div>
            <div className="form-field">
              <label htmlFor="categoryId">Categoría</label>
              <select id="categoryId" name="categoryId" defaultValue="" required>
                <option value="" disabled>
                  {loadingCategories
                    ? 'Cargando categorías...'
                    : error
                      ? 'Error al cargar categorías'
                      : 'Selecciona una categoría'}
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {categoriesError && <p className="form-helper error">{categoriesError}</p>}
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Para llegar más rápido al trabajo"
                required
              ></textarea>
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="imageUrl">Imagen (URL)</label>
              <input type="url" id="imageUrl" name="imageUrl" placeholder="https://picsum.photos/600/400" required />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="primary-button" disabled={submitting || (titleTouched && titleError)}>
              {submitting ? 'Guardando...' : 'Guardar Producto'}
            </button>
            <button type="reset" className="secondary-button" disabled={submitting}>
              Limpiar
            </button>
          </div>
          {createdProduct && !submitting && (
            <div className="submit-message success">✓ Producto creado exitosamente</div>
          )}
          {submitError && <div className="submit-message error">✗ {submitError.message}</div>}
        </form>
      </div>
    </div>
  )
}

export default AddProductPage
