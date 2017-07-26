import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    paddingHorizontal: Metrics.containerMarginX
  },
  header: {
    marginTop: Metrics.containerMarginX,
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    textAlign: 'center',
    color: Colors.header,
  },
  description: {
    marginBottom: Metrics.doubleBaseMargin,
  },
  descriptionText: {
    textAlign: 'center',
  },
  emailInput: {
    marginBottom: Metrics.smallMargin,
  },
  passwordInput: {
    marginBottom: Metrics.baseMargin,
  },
  facebookBtn: {},
  googleBtn: {},
  loginBtn: {
    flex: 1,
    marginRight: Metrics.baseMargin
  },
  signUpBtn: {
    flex: 1,
    marginLeft: Metrics.baseMargin
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    paddingVertical: Metrics.smallMargin
  },
  dividerText: {
    textAlign: 'center',
    color: Colors.mutedText
  },
  orDivider: {
    paddingVertical: Metrics.baseMargin
  }
})
