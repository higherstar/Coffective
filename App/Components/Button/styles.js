import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  btn: {
    justifyContent: 'center',
    borderRadius: Metrics.btnRadius,
  },
  icon: {
    marginRight: Metrics.baseMargin
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: Fonts.size.button,
    fontWeight: '700'
  },
  //sizes
  sm: {
    height: Metrics.btnSizes.sm,
  },
  md: {
    height: Metrics.btnSizes.md,
  },
  lg: {
    height: Metrics.btnSizes.lg,
  },
  // Primary
  primary: {
    backgroundColor: Colors.primary
  },
  primaryText: {
    color: Colors.white
  },
  // Primary Outline
  primaryOutline: {
    backgroundColor: Colors.transparent,
    borderWidth: Metrics.btnBorderWidth,
    borderColor: Colors.primary
  },
  primaryOutlineText: {
    color: Colors.primary
  },
  // Secondary
  secondary: {
    backgroundColor: Colors.white
  },
  secondaryText: {
    color: Colors.primary
  },
  // Secondary Outline
  secondaryOutline: {
    backgroundColor: Colors.transparent,
    borderWidth: Metrics.btnBorderWidth,
    borderColor: Colors.secondaryBtnBorder
  },
  secondaryOutlineText: {
    color: Colors.secondaryBtnText
  },
  // Link
  link: {
    backgroundColor: Colors.transparent
  },
  linkText: {
    fontWeight: '400'
  },
  // White
  white: {
    backgroundColor: Colors.white,
  },
  whiteText: {
    color: Colors.primary
  },
  // White Outline
  whiteOutline: {
    backgroundColor: Colors.transparent,
    borderWidth: Metrics.btnBorderWidth,
    borderColor: Colors.white
  },
  whiteOutlineText: {
    color: Colors.white
  },
  // Facebook
  facebook: {
    backgroundColor: Colors.facebook
  },
  facebookText: {
    color: Colors.white
  },
  // Google
  google: {
    backgroundColor: Colors.google
  },
  googleText: {
    color: Colors.white
  },
})
