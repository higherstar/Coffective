import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    marginBottom: Metrics.baseMargin,
    flex: 1,
  },
  content: {
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    flexBasis: '20%',
    marginHorizontal: Metrics.baseMargin,
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  row: {
    flex: 1,
    position: 'relative',
    paddingVertical: Metrics.baseMargin,
    paddingRight: Metrics.doubleBaseMargin,
  },
  notLast: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
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
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
  },
  description: {
  },
  descriptionText: {
    color: Colors.muted,
    fontSize: Fonts.size.small,
  },
})
