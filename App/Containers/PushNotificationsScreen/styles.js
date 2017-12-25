import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.containerMarginX,
    justifyContent: 'center'
  },
  title: {
    paddingBottom: Metrics.smallMargin
  },
  titleText: {
    textAlign: 'center'
  },
  description: {
    paddingBottom: Metrics.doubleBaseMargin,
  },
  descriptionText: {
    textAlign: 'center',
    color: Colors.lightGrey,
  },
  actions: {
    flexDirection: 'row'
  },
  submitBtn: {
  },
  skipBtn: {
  },
  skipBtnText: {
    fontSize: Fonts.size.small
  },
})
