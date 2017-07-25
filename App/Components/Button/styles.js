import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  btn: {
    justifyContent: 'center',
    height: Metrics.btnHeight,
    borderRadius: Metrics.btnRadius
  },
  icon: {
    color: Colors.white,
    marginRight: Metrics.baseMargin
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: Fonts.size.button,
    fontFamily: Fonts.type.base
  },
  primaryText: {
    color: Colors.white
  },
  primary: {
    backgroundColor: Colors.primary
  },
  primaryOutline: {
    borderWidth: Metrics.btnBorderWidth,
    borderColor: Colors.primary
  },
  primaryOutlineText: {
    color: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.white
  },
  secondaryText: {
    color: Colors.primary
  },
  secondaryOutline: {
    borderWidth: Metrics.btnBorderWidth,
    borderColor: Colors.secondary
  },
  secondaryOutlineText: {
    color: Colors.secondary
  }
})
