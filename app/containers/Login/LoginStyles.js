import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
    // TODO replace with image
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: Metrics.marginX,
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    maxHeight: 50,
    resizeMode: 'contain',
    flex: 1,
    alignSelf: 'center'
  },
  actions: {
    position: 'absolute',
    bottom: -Metrics.btnSizes.lg / 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerWrapper: {
    minHeight: 100,
  },
  footer: {
    minHeight: 80,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
    marginBottom: Metrics.smallMargin,
  },
  descriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    fontWeight: '500',
  },
  email: {},
  emailIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
  password: {},
  passwordIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
  forgotPasswordBtn: {
    paddingVertical: Metrics.smallMargin,
    marginTop: Metrics.exSmallMargin,
    alignSelf: 'flex-end',
  },
  forgotPasswordBtnText: {
    color: Colors.white,
    fontWeight: '400',
  },
  signUpBtn: {
    marginLeft: Metrics.exSmallMargin
  },
  facebookBtn: {
    marginRight: Metrics.baseMargin,
    ...Metrics.boxShadow,
  },
  facebookIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
  submitBtn: {
    ...Metrics.boxShadow,
  },
  submitIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
  newUserText: {
   color: Colors.muted,
  }
})
