import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    paddingHorizontal: Metrics.containerMarginX,
  },
  myEthnicity: {
    paddingBottom: Metrics.doubleBaseMargin * 2
  },
  myEthnicityText: {
    textAlign: 'center'
  }
})
