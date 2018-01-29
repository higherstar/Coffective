import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

const headMargin = Metrics.inputSizes.md / 2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
    height: 170,
    position: 'relative',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
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
  content: {
    flex: 1,
    marginTop: headMargin
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
    marginBottom: Metrics.baseMargin,
  },
  descriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    fontWeight: '500',
  },
})
