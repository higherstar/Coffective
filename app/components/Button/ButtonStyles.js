import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  btn: {
    justifyContent: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Fonts.size.button,
    fontWeight: '600',
    textAlign: 'center',
  },
  // sizes
  sm: {
    height: Metrics.btnSizes.sm,
  },
  md: {
    height: Metrics.btnSizes.md,
  },
  lg: {
    height: Metrics.btnSizes.lg,
  },
  xl: {
    height: Metrics.btnSizes.xl,
    minWidth: Metrics.btnSizes.xl,
    borderRadius: 36.5,
  },
  // Default
  default: {
    backgroundColor: Colors.white,
  },
  defaultText: {
    color: Colors.primary,
  },
  // Primary
  primary: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.btnBorderRadius,
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
  // Link
  link: {
    backgroundColor: Colors.transparent
  },
  linkText: {
    color: Colors.primary,
  },
})
