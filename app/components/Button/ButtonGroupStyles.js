import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  group: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'row'
  },
  divider: {
    backgroundColor: Colors.whiteMuted,
    width: 1,
    marginVertical: Metrics.smallMargin * 1.5,
  }
})
