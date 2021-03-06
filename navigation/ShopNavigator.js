import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'

const defaultNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.darkBlue : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.darkBlue
  }
}

const ProductsNavigator = createStackNavigator({
  ProductOverview: ProductOverviewScreen,
  ProductDetail: ProductDetailScreen
}, defaultNavOptions)


export default createAppContainer(ProductsNavigator)