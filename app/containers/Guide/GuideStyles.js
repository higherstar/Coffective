import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpBtn: {
    borderRadius: 0,
  },
  loginBtn: {
    borderRadius: 0,
  },
  actions: {
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  itemWrapper: {
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.baseMargin * 1.5,
  },
  item: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  dots: {
    marginBottom: Metrics.baseMargin * 1.5,
    paddingHorizontal: Metrics.marginX,
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
  description: {},
  descriptionText: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
})
