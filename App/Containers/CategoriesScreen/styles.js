import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  section: {},
  nameWrapper: {
    margin: Metrics.baseMargin
  },
  name: {
    ...Fonts.style.h4,
    color: Colors.primary,
    textAlign: 'center'
  },
  descriptionWrapper: {
    marginHorizontal: Metrics.baseMargin
  },
  description: {
    textAlign: 'center'
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: 200
  },
  getStarted: {
    margin: Metrics.baseMargin
  }
})
