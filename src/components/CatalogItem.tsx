import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/modules/cart/action'
import { IProduct } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispach = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispach(addProductToCart(product))
  }, [dispach, product])

  return (
    <article>
      <strong>{product.title}</strong> {'  -  '}
      <span>{product.price}</span> {'  '}

      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
    </article>
  )
}

export default CatalogItem
