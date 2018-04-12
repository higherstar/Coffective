import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  list: {
  },
  item: {
    flexDirection: 'row',
    paddingVertical: Metrics.smallMargin / 2,
  },
  title: {
    flex: 1,
  },
  titleText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
  },
  icon: {
    fontSize: Metrics.icons.md,
    color: Colors.primary,
    marginRight: Metrics.smallMargin,
  },
})
