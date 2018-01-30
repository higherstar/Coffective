import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  meta: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.smallMargin,
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    marginBottom: Metrics.smallMargin,
  },
  titleText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
  },
  descriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary
  },
})
