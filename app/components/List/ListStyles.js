import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  list: {
  },
  item: {
    flexDirection: 'row',
    paddingVertical: Metrics.smallMargin / 2,
  },
  itemTitle: {
    flex: 1,
  },
  itemTitleText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
  },
  itemIcon: {
    fontSize: Metrics.icons.md,
    color: Colors.primary,
    marginRight: Metrics.smallMargin,
  },
})
