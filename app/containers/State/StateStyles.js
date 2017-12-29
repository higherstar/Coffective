import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

const headMargin = Metrics.inputSizes.md / 2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: headMargin
  },
  head: {
    paddingHorizontal: Metrics.marginX,
    height: 100,
    // TODO replace with image
    backgroundColor: Colors.primary,
    position: 'relative',
    borderBottomRightRadius: 100,
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
  options: {
  },
  option: {
    marginLeft: Metrics.marginX,
    paddingVertical: Metrics.smallMargin * 1.5,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkIcon: {
    fontSize: Metrics.icons.md,
    color: Colors.primary,
    paddingHorizontal: Metrics.baseMargin,
  },
})
