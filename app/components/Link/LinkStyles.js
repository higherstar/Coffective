import { StyleSheet } from 'react-native'
import { AppStyles, Metrics } from '../../themes'

const prefixWidth = 50
const itemHeight = 50

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: itemHeight,
    position: 'relative',
  },
  link: {
    flexDirection: 'row',
    flex: 1,
    height: itemHeight,
    alignItems: 'center',
    paddingRight: Metrics.baseMargin,
  },
  content: {
    flex: 1,
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
  },
})
