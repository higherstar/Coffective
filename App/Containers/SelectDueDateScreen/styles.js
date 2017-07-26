import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.containerMarginX,
    paddingBottom: Metrics.smallMargin
  },
  header: {
    paddingTop: Metrics.containerMarginX,
    paddingBottom: Metrics.doubleBaseMargin * 2,
  },
  headerText: {
    textAlign: 'center'
  },
  date: {
    width: '100%'
  },
  dateInput: {
    paddingHorizontal: Metrics.baseMargin,
    borderColor: Colors.inputBorder,
    borderRadius: Metrics.inputRadius,
    borderWidth: Metrics.inputBorderWidth,
    backgroundColor: Colors.transparent,
    height: Metrics.inputSizes.md,
  },
  dateText: {
    color: Colors.inputText,
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    marginHorizontal: Metrics.smallMargin * 1.5,
    marginVertical: Metrics.smallMargin * 1.5,
    alignSelf: 'center',
    height: 20,
    resizeMode: 'contain',
    width: 20,
  },
  datePlaceholder: {
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light,
    color: Colors.lightGrey
  },
  proceedBtn: {},
  skipBtn: {},
  skipBtnText: {
    fontSize: Fonts.size.small
  },
  safeData: {
    marginTop: 'auto',
  }
})
