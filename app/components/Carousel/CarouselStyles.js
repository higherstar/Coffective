import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  carousel: {
    flex: 1,
  },
  item: {
    // TODO
    // margin: Metrics.baseMargin,
    // width: Metrics.screenWidth * 0.8,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Metrics.marginX * 2,
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
