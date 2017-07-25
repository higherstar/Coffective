import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    minHeight: Metrics.screenHeight - Metrics.navBarHeight
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    marginVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.containerMarginX,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: Metrics.containerMarginX,
  },
  emailInput: {
    marginBottom: Metrics.smallMargin,
  },
  passwordInput: {
    marginBottom: Metrics.baseMargin,
  },
  loginBtn: {
    marginBottom: Metrics.baseMargin,
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end',
    marginBottom: Metrics.baseMargin,
  },
  forgotPasswordText: {
    color: Colors.white
  },
  signUpBtn: {
    marginHorizontal: Metrics.containerMarginX,
    marginVertical: Metrics.baseMargin,
  }
})
