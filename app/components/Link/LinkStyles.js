import { StyleSheet } from 'react-native'
import { AppStyles, Metrics } from '../../themes'

const prefixWidth = 50
const itemHeight = 50

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: itemHeight,
  },
  link: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: itemHeight,
    alignItems: 'center',
    paddingRight: Metrics.baseMargin,
  },
  hasPrefix: {
    paddingLeft: prefixWidth,
  },
  prefix: {
    position: 'absolute',
    left: 0,
    width: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    ...AppStyles.inputIcon,
  },
})
