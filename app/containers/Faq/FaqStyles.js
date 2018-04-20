import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

const headMargin = Metrics.inputSizes.md / 2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: headMargin + Metrics.baseMargin,
  },
  head: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
    height: 210,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
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
  questionsHeader: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
  },
  questionsHeaderText: {
    color: Colors.muted,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
  },
  questions: {
    marginLeft: Metrics.baseMargin,
  },
  icon: {
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
})
