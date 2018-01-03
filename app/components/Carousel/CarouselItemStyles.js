import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: Metrics.smallMargin * 1.5,
    paddingVertical: Metrics.baseMargin * 1.5,
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  subHeader: {
    marginBottom: Metrics.smallMargin,
  },
  subHeaderText: {
    fontWeight: '500',
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    color: Colors.muted,
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    fontWeight: '300',
    fontSize: Fonts.size.h1,
  },
  description: {
  },
  descriptionText: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
})
