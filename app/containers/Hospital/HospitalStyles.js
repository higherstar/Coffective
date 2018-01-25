import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
  },
  head: {
    height: Metrics.navBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  card: {
  },
  cardTitleText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  cardDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary
  },
  cardTitle: {
    marginBottom: Metrics.smallMargin,
  },
  cardDescription: {
    marginBottom: Metrics.baseMargin,
  },
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
