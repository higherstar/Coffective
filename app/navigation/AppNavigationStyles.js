import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../themes'

export default StyleSheet.create({
  iconWrapper: {
    height: Metrics.navBarWithOutStatusBarHeight,
    padding: Metrics.smallMargin,
  },
  icon: {
    color: Colors.white,
    fontSize: Metrics.icons.lg,
  }
})
