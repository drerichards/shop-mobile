import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, FlatList } from 'react-native'

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts)
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  )
}

export default ProductOverviewScreen