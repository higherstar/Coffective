import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  carouselWrapper: {
    flex: 1,
  },
  carousel: {
    flex: 1,
    // paddingHorizontal: 40,
  },
  item: {
    // TODO https://github.com/oliviertassinari/react-swipeable-views/pull/151
    // TODO https://react-swipeable-views.com/demos/demos/
    // paddingHorizontal: 20,
    // flexShrink: 0,
    // width: Metrics.screenWidth,
    // overflow: 'visible',
    // paddingHorizontal: 20,
    // flex: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.baseMargin * 1.5,
    // width: Metrics.screenWidth - Metrics.doubleBaseMargin
  },
  notActive: {
    // marginHorizontal: -Metrics.doubleBaseMargin * 1.5,
    // marginVertical: Metrics.doubleBaseMargin,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Metrics.baseMargin * 1.5,
    paddingHorizontal: Metrics.marginX,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.whiteMuted
  },
  notLastDot: {
    marginRight: Metrics.smallMargin
  },
  activeDot: {
    backgroundColor: Colors.white
  },
})
