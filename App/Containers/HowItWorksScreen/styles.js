import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.background
  },
  slide: {
    flex: 1,
    paddingBottom: Metrics.doubleBaseMargin,
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
    height: 240
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
    paddingHorizontal: Metrics.smallMargin
  },
  skipBtnText: {
    color: Colors.white
  },
})
