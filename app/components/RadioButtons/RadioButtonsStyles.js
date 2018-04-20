import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

const prefixWidth = 35

export default StyleSheet.create({
  optionWrapper: {
    marginLeft: Metrics.marginX,
    paddingVertical: Metrics.smallMargin * 1.5,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  withIcon: {
    paddingLeft: prefixWidth,
  },
  icon: {
    position: 'absolute',
    left: 0,
    width: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
})
