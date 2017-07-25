import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: null,
    height: 180
  },
  titleWrapper: {
    marginVertical: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.h3
  },
  section: {
    padding: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey
  },
  getStarted: {
    margin: Metrics.baseMargin,
  }
})
