import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import Colors from '../../constants/Colors'

const ProductItem = ({ data, onViewDetail, onAddToCart }) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: data.imageUrl }} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>${data.price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color={Colors.lightBlue}
            style={styles.button}
            title='View Details'
            onPress={onViewDetail}
          />
          <Button
            color={Colors.red}
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
  },
  imageContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'space-between',
    padding: 10
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 15
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
    borderTopWidth: .5,
    borderColor: '#eee'
  }
})

export default ProductItem
