import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  scrollContainer: {
    // flex: 1,
  },
  container: {
    // paddingHorizontal: Metrics.marginX
  },
  logo: {
    maxHeight: 30,
    resizeMode: 'contain',
    flex: 1,
    alignSelf: 'center'
  },
  header: {
    // marginTop: Metrics.marginX,
    // marginBottom: Metrics.smallMargin,
  },
  headerText: {
    // textAlign: 'center',
    // color: Colors.header,
  },
  description: {
    // marginBottom: Metrics.doubleBaseMargin,
  },
  descriptionText: {
    // textAlign: 'center',
  },
  email: {
    // marginBottom: Metrics.smallMargin,
  },
  password: {
    // marginBottom: Metrics.baseMargin,
  },
  forgotPasswordBtn: {
  },
  signUpBtn: {
  },
  submitBtn: {
  },
})
