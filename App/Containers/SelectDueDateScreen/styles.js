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
