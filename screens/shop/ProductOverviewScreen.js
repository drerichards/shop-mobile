import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import ProductItem from '../../components/shop/ProductItem'

const viewDetailHandler = () => {

}

const productAddHandler = () => { }


const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts)
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <ProductItem
        data={itemData.item}
        onViewDetail={() => props.navigation.navigate(
          'ProductDetail',
          {
            productId: itemData.item.id,
            productTitle: itemData.item.title
          }
        )
        }
        onAddToCart={productAddHandler}
      />}
    />
  )
}

ProductOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products'
  }
}

export default ProductOverviewScreen
