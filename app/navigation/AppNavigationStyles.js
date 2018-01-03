import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../themes'

export default StyleSheet.create({
  iconWrapper: {
    height: Metrics.navBarWithOutStatusBarHeight,
    padding: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: Colors.white,
    fontSize: Metrics.icons.lg,
  },
  backBtnText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  },
  skipBtn: {
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
  skipBtnText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  }
})
