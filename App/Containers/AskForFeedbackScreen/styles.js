import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.containerMarginX,
    justifyContent: 'center'
  },
  askForFeedback: {
    paddingBottom: Metrics.smallMargin
  },
  askForFeedbackText: {
    textAlign: 'center'
  },
  actions: {
    flexDirection: 'row'
  },
  cancelBtn: {
    flex: 1,
    marginRight: Metrics.smallMargin
  },
  submitBtn: {
    flex: 1,
    marginLeft: Metrics.smallMargin
  },
  skipBtn: {
    marginTop: Metrics.smallMargin
  },
  skipBtnText: {
    fontSize: Fonts.size.small
  },
  safeData: {
    marginBottom: Metrics.doubleBaseMargin
  }
})
