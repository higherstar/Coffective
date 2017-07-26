import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    paddingHorizontal: Metrics.containerMarginX
  },
  myName: {
    marginTop: Metrics.containerMarginX,
    marginBottom: Metrics.doubleBaseMargin,
  },
  myNameText: {
    textAlign: 'center',
  },
  myZipCode: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
  },
  myZipCodeText: {
    textAlign: 'center',
  },
  safeData: {
    marginVertical: Metrics.smallMargin,
  },
  safeDataText: {
    textAlign: 'center',
  },
  firstName: {
    marginBottom: Metrics.baseMargin,
  },
  firstNameInput: {
    textAlign: 'center'
  },
  lastNameInput: {
    textAlign: 'center'
  },
  zipCodeInput: {
    textAlign: 'center'
  },
  letsGoBtn: {
    marginBottom: Metrics.containerMarginX,
    marginTop: 'auto'
  },
  safeDataLabel: {
    fontWeight: '500'
  }
})
