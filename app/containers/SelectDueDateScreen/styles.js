import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

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
    width: '100%',
    borderColor: Colors.inputBorder,
    borderRadius: Metrics.inputRadius,
    borderWidth: Metrics.inputBorderWidth,
  },
  dateInput: {
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    flex: 1,
    minHeight: Metrics.inputSizes.md,
    borderWidth: 0
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
  btnTextConfirm: {
    ...Fonts.style.normal,
    color: Colors.primary
  },
  btnTextCancel: {
    ...Fonts.style.normal,
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
