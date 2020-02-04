import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam('productId')
  const selectedProduct = useSelector(state => state.products.availableProducts.find(
    prod => prod.id === productId)
  )

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  )
}

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

const styles = StyleSheet.create({

})

export default ProductDetailScreen
