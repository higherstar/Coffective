import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight - 20,
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
  skipBtnText: {
    fontSize: Fonts.size.small
  },
  selectWrapper: {
    flex: 1,
    maxHeight: 50,
    paddingHorizontal: Metrics.baseMargin,
    borderColor: Colors.inputBorder,
    borderRadius: Metrics.inputRadius,
    borderWidth: Metrics.inputBorderWidth,
    backgroundColor: Colors.transparent,
  }
})
