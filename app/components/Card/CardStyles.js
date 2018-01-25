import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  card: {
    ...Metrics.boxShadow,
    borderRadius: 7,
    backgroundColor: Colors.white,
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin * 1.5,
  },
  titleText: {
    color: Colors.grey,
    fontWeight: '500',
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
  body: {
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
  },
})
