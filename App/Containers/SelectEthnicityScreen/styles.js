import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    paddingHorizontal: Metrics.containerMarginX,
    paddingTop: Metrics.containerMarginX,
    paddingBottom: Metrics.smallMargin
  },
  myEthnicity: {
    paddingBottom: Metrics.doubleBaseMargin
  },
  myEthnicityText: {
    textAlign: 'center'
  },
  safeData: {
    marginTop: 'auto'
  },
})
