import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

const ProductItem = ({ data, onViewDetail, onAddToCart }) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>${data.price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title='View Details'
            onPress={onViewDetail}
          />
          <Button
            style={styles.button}
            title='To Cart'
            onPress={onAddToCart}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000',
    shadowOpacity: .16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
    // overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '60%',
  },
  contentContainer: {
    padding: 10
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#999'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ProductItem
