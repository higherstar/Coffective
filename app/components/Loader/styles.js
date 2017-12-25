import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    // disable content when loading
    backgroundColor: Colors.transparent
  },
  loader: {
    alignSelf: 'center',
    padding: Metrics.doubleBaseMargin,
    backgroundColor: Colors.transparentGrey,
    borderRadius: Metrics.loaderBgRadius
  }
})
