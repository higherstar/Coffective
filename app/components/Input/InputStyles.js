import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

const prefixWidth = 50

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.inputBorderRadius,
    backgroundColor: Colors.white,
    position: 'relative',
  },
  input: {
    color: Colors.inputText,
    flex: 1,
  },
  md: {
    height: Metrics.inputSizes.md,
    fontSize: Fonts.size.input,
  },
  prefix: {
    position: 'absolute',
    left: 0,
    width: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
  hasPrefix: {
    paddingLeft: prefixWidth - Metrics.baseMargin,
  },
  // TODO suffix as prefix
  hasSuffix: {
    paddingRight: Metrics.baseMargin,
  }
})
