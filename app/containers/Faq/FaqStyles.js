import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

const headMargin = Metrics.inputSizes.md / 2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: headMargin + Metrics.baseMargin
  },
  head: {
    paddingHorizontal: Metrics.marginX,
    height: 120,
    // TODO replace with image
    backgroundColor: Colors.primary,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  search: {
    position: 'absolute',
    bottom: -headMargin,
    left: Metrics.marginX,
    right: Metrics.marginX,
    ...Metrics.boxShadow,
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
  header: {
    marginBottom: Metrics.doubleBaseMargin,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  commonQuestionsHeader: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
  },
  commonQuestionsHeaderText: {
    color: Colors.muted,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
  },
  item: {
    position: 'relative',
    marginLeft: Metrics.baseMargin,
  },
  itemHeader: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    paddingVertical: Metrics.smallMargin * 1.5,
    paddingRight: Metrics.doubleBaseMargin,
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Metrics.baseMargin,
    justifyContent: 'center'
  },
  icon: {
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
})
