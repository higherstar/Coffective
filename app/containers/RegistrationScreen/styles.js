import { StyleSheet } from 'react-native'
import { Metrics } from '../../themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    paddingHorizontal: Metrics.containerMarginX
  },
  myName: {
    marginTop: Metrics.containerMarginX,
    marginBottom: Metrics.baseMargin,
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
  errorZipCodeInput: {
    borderColor: 'red',
    textAlign: 'center'
  },
  zipError: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center'
  },
})