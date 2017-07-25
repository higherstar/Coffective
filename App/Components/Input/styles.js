import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  input: {
    paddingHorizontal: Metrics.baseMargin,
    borderColor: Colors.grey,
    borderRadius: Metrics.inputRadius,
    borderWidth: Metrics.inputBorderWidth,
    backgroundColor: Colors.white
  },
  sm: {
    height: Metrics.btnInputs.sm,
    fontSize: Fonts.size.inputSmall,
    fontFamily: Fonts.type.base
  },
  md: {
    height: Metrics.btnInputs.md,
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light
  },
  lg: {
    height: Metrics.btnInputs.lg,
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light
  },
  icon: {
    paddingHorizontal: Metrics.baseMargin,
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0
  },
  // center icon in input
  smallIcon: {
    top: Metrics.inputSmall / 2,
    transform: [{
      translateY: -Metrics.icons.small / 2
    }]
  },
  mediumIcon: {
    top: Metrics.inputMedium / 2,
    transform: [{
      translateY: -Metrics.icons.medium / 2
    }]
  },
  // add padding to input if icon exists
  smallInputIcon: {
    paddingLeft: Metrics.doubleBaseMargin + Metrics.icons.small
  },
  mediumInputIcon: {
    paddingLeft: Metrics.doubleBaseMargin + Metrics.icons.medium
  }
})
