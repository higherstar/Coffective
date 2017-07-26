import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  input: {
    paddingHorizontal: Metrics.baseMargin,
    borderColor: Colors.inputBorder,
    borderRadius: Metrics.inputRadius,
    borderWidth: Metrics.inputBorderWidth,
    backgroundColor: Colors.transparent,
    color: Colors.inputText
  },
  sm: {
    height: Metrics.inputSizes.sm,
    fontSize: Fonts.size.inputSmall,
    fontFamily: Fonts.type.base
  },
  md: {
    height: Metrics.inputSizes.md,
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light
  },
  lg: {
    height: Metrics.inputSizes.lg,
    fontSize: Fonts.size.inputMedium,
    fontFamily: Fonts.type.light
  },
  icon: {
    marginHorizontal: Metrics.smallMargin * 1.5,
    marginVertical: Metrics.smallMargin * 1.5,
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0
  },
  // center icon in input
  mdIcon: {
    alignSelf: 'center',
    height: 20,
    resizeMode: 'contain',
    width: 20
  },
  // add padding to input if icon exists
  mdInputIcon: {
    paddingLeft: Metrics.smallMargin * 2 + Metrics.icons.medium
  }
})
