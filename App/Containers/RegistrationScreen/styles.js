import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  form: {},
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
  },
  header: {
    marginTop: Metrics.containerMarginX,
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
  input: {
    backgroundColor: Colors.transparent
  },
  termsAndConditionsBtn: {
    borderColor: Colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  createAccountBtn: {
    marginHorizontal: Metrics.containerMarginX,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.containerMarginX,
  },
  sendUpdates: {
    marginHorizontal: Metrics.containerMarginX,
    marginVertical: Metrics.baseMargin,
  },
  sendUpdatesText: {
    ...Fonts.style.normal
  },
  checkedIcon: {
    fontSize: Metrics.icons.medium,
    color: Colors.primary
  },
  uncheckedIcon: {
    fontSize: Metrics.icons.medium,
    color: Colors.grey
  }
})
