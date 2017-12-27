import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.inputBorderRadius,
    backgroundColor: Colors.white,
  },
  input: {
    color: Colors.inputText,
    flex: 1,
  },
  md: {
    height: Metrics.inputSizes.md,
    fontSize: Fonts.size.input,
  },
  hasPrefix: {
    paddingLeft: Metrics.baseMargin,
  },
  hasSuffix: {
    paddingRight: Metrics.baseMargin,
  }
})
