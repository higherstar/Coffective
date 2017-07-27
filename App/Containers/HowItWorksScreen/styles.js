import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  slide: {
    flex: 1,
    paddingBottom: Metrics.baseMargin * 1.5,
  },
  slideBody: {
    flex: 1,
    marginHorizontal: Metrics.containerMarginX
  },
  slideBtn: {
    width: 190,
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: Metrics.screenHeight * 0.4
  },
  titleWrapper: {
    paddingVertical: Metrics.baseMargin,
  },
  title: {
    textAlign: 'center',
    color: Colors.header
  },
  descriptionWrapper: {
    flex: 1,
    marginBottom: Metrics.baseMargin
  },
  description: {
    textAlign: 'center',
    color: Colors.description
  },
  footer: {},
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Metrics.containerMarginX * 2,
    paddingHorizontal: Metrics.containerMarginX,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.lightBlue
  },
  notLastDot: {
    marginRight: Metrics.smallMargin
  },
  activeDot: {
    backgroundColor: Colors.primary
  },
  skipBtn: {
    paddingHorizontal: Metrics.baseMargin,
    height: Metrics.navBarWithOutStatusBarHeight
  },
  skipBtnText: {
    color: Colors.white
  },
})
