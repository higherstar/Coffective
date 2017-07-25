import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.primary
  },
  header: {
    ...Fonts.style.h1,
    color: Colors.white
  },
  titleWrapper: {
    marginBottom: Metrics.smallMargin,
    backgroundColor: Colors.primary
  },
  title: {
    ...Fonts.style.h3,
    color: Colors.white
  },
  description: {
    color: Colors.whiteMuted
  },
  section: {
    padding: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    backgroundColor: Colors.primary
  },
  getStarted: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.primary
  }
})
