import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpBtn: {
    borderRadius: 0,
  },
  loginBtn: {
    borderRadius: 0,
  },
  actions: {
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
})
