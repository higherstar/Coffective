import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

const headHeight = 50

export default StyleSheet.create({
  container: {
    flex: 1,
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
  scrollContent: {
    padding: Metrics.smallMargin,
  },
  content: {
    flex: 1,
  },
  category: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    marginBottom: Metrics.smallMargin,
    ...Metrics.boxShadow,
  },
  categoryHead: {
    height: headHeight,
    flexDirection: 'row',
    alignItems: 'center',
    // TODO overflow hidden turns box shadow off - fix it
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    overflow: 'hidden',
  },
  categoryName: {
    flex: 1,
  },
  categoryNameText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
  },
  categoryIconWrapper: {
    paddingLeft: Metrics.smallMargin * 1.5,
    paddingRight: Metrics.smallMargin,
  },
  categoryIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
  },
  videoIconWrapper: {
    paddingRight: Metrics.smallMargin,
  },
  videoIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
  },
  categoryImage: {
    width: headHeight - Metrics.smallMargin,
    height: headHeight - Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  notLast: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  notChecked: {
    color: Colors.muted,
  },
})
