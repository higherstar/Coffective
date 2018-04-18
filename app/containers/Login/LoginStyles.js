import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
  },
  scrollContent: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    bottom: Metrics.screenHeight * 0.17,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  logoWrapper: {
    height: 100,
  },
  logo: {
    maxHeight: 50,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  formWrapper: {
    flex: 1,
    // TODO fix width - should be generic
    width: Metrics.screenWidth - Metrics.marginX * 2,
    alignSelf: 'center',
  },
  form: {
  },
  actions: {
    position: 'absolute',
    bottom: Metrics.screenHeight * 0.17 - Metrics.btnSizes.lg / 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: Metrics.doubleBaseMargin,
    left: 0,
    right: 0,
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
