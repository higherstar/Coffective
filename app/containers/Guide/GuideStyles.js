import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpBtn: {
    minHeight: Metrics.footerBtnHeight,
    borderRadius: 0,
  },
  loginBtn: {
    minHeight: Metrics.footerBtnHeight,
    borderRadius: 0,
  },
  actions: {
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
