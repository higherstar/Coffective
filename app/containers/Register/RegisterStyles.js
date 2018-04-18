import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  content: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
  },
  scrollContent: {
    flex: 1,
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
    marginBottom: Metrics.doubleBaseMargin,
  },
  descriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  },
  email: {
  },
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
  footer: {
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: Metrics.doubleBaseMargin,
  },
  facebookBtn: {
    marginRight: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
  facebookBtnText: {
    textAlign: 'left',
    // TODO fix it - make it flexible
    maxWidth: 150,
  },
  facebookIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
    paddingRight: Metrics.baseMargin,
    paddingLeft: Metrics.smallMargin,
  },
  submitBtn: {
  },
  submitIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
})
