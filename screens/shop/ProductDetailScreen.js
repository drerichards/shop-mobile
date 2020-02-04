import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import Colors from '../../constants/Colors'

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam('productId')
  const selectedProduct = useSelector(state => state.products.availableProducts.find(
    prod => prod.id === productId)
  )

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
      <View style={styles.buttonContainer}>
        <Button color={Colors.red} style={styles.button} title='Add to Cart' onPress={() => { }} />
      </View>
    </ScrollView>
  )
}

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: Colors.lightBlue,
    textAlign: 'center',
    marginVertical: 10
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  button: {
    marginVertical: 20,
  }
})

export default ProductDetailScreen
