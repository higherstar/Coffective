import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  card: {
    ...Metrics.boxShadow,
    borderRadius: 7,
    backgroundColor: Colors.white,
  },
  cover: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
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
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin * 1.5,
  },
  actions: {
    marginTop: Metrics.baseMargin,
  },
})
