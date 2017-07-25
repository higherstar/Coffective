import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.background
  },
  header: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.smallMargin,
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
  resetPasswordBtn: {
    position: 'absolute',
    bottom: Metrics.containerMarginX,
    left: 0,
    right: 0,
    marginHorizontal: Metrics.containerMarginX,
  },
})
