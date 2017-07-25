import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  form: {
    // move input to center of screen
    marginTop: -100,
  },
  container: {
    justifyContent: 'center',
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  header: {
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.containerMarginX,
  },
  headerText: {
    textAlign: 'center',
    color: Colors.primary,
  },
  description: {
    marginBottom: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.containerMarginX,
  },
  descriptionText: {
    textAlign: 'center',
  },
  emailInput: {
    marginHorizontal: Metrics.containerMarginX,
    marginBottom: Metrics.baseMargin
  },
  submitBtn: {
    position: 'absolute',
    bottom: Metrics.containerMarginX,
    left: 0,
    right: 0,
    marginHorizontal: Metrics.containerMarginX,
  },
})
