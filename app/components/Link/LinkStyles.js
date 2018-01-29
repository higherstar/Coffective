import { StyleSheet } from 'react-native'
import { AppStyles, Metrics } from '../../themes'

const prefixWidth = 50

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: Metrics.baseMargin,
  },
  link: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: prefixWidth - Metrics.baseMargin,
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
