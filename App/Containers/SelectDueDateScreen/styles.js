import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  header: {
    paddingHorizontal: Metrics.containerMarginX,
    paddingVertical: Metrics.baseMargin
  },
  headerText: {
    color: Colors.white
  },
  zip: {
    marginHorizontal: Metrics.containerMarginX,
    marginTop: Metrics.baseMargin,
  },
  zipInput: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.white,
    color: Colors.white,
    textAlign: 'center',
  },
  useLocationServiceBtn: {
    borderRadius: 0,
    marginHorizontal: Metrics.containerMarginX,
    marginTop: Metrics.baseMargin,
  },
  useZipCodeBtn: {
    borderRadius: 0,
    marginHorizontal: Metrics.containerMarginX,
    marginTop: Metrics.baseMargin,
  },
})
