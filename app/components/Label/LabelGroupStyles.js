import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  group: {},
  bordered: {
    borderRadius: Metrics.inputBorderRadius,
    overflow: 'hidden',
  },
  item: {
    borderRadius: 0,
  },
  notFirst: {
    borderTopColor: Colors.inputBorder,
    borderTopWidth: Metrics.inputBorderWidth,
  }
})
