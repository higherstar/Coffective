import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    paddingTop: Metrics.containerMarginX,
    paddingBottom: Metrics.smallMargin
  },
  myAgeRange: {
    paddingBottom: Metrics.smallMargin,
    marginHorizontal: Metrics.containerMarginX,
  },
  myAgeRangeText: {
    textAlign: 'center'
  },
  safeData: {
    marginHorizontal: Metrics.containerMarginX,
    marginTop: 'auto'
  },
  proceedBtn: {
    marginHorizontal: Metrics.containerMarginX,
  },
  skipBtn: {
    marginHorizontal: Metrics.containerMarginX,
  },
  skipBtnText: {
    fontSize: Fonts.size.small
  },
  options: {
    marginLeft: Metrics.containerMarginX,
    marginBottom: Metrics.smallMargin
  },
  option: {
    paddingVertical: Metrics.smallMargin * 1.25,
    borderBottomColor: Colors.inputBorder,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioBtnIcon: {
    height: 27,
    width: 27,
    borderRadius: 13.5,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    marginRight: Metrics.baseMargin
  },
  selectedRadioBtnIcon: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    marginRight: Metrics.baseMargin
  }
})
