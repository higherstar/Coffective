import { StyleSheet } from 'react-native'
import { AppStyles, Metrics } from '../../themes'

const prefixWidth = 50
const itemHeight = 50

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    minHeight: itemHeight,
    position: 'relative',
  },
  link: {
    flexDirection: 'row',
    flex: 1,
    minHeight: itemHeight,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingRight: Metrics.baseMargin,
  },
  hasPrefix: {
  },
  prefix: {
    minWidth: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    ...AppStyles.inputIcon,
    position: 'absolute',
    right: Metrics.smallMargin,
  },
})
