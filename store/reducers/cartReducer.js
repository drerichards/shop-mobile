import { ADD_TO_CART } from '../actions/cartActions'
import CartItem from '../../models/cartItem'

const initialState = {
  items: {},
  totalAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.addedProduct
      const prodPrice = addedProduct.prodPrice
      const prodTitle = addedProduct.prodTitle

      if (items[addedProduct.id]) {
        // item already in cart

      } else {
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
      }
      break

    default:
      break
  }
  return state
}