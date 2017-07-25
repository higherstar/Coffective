import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  article: {
    padding: Metrics.baseMargin,
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    flexDirection: 'row'
  },
  articleName: {
    fontWeight: 'bold'
  },
  articleDescription: {
    ...Fonts.style.description,
  },
  articleImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  articleDetails: {
    marginLeft: Metrics.smallMargin,
    flex: 1
  },
  articleArrowWrapper: {
    justifyContent: 'center'
  },
  articleArrow: {
    width: 30,
    fontSize: Metrics.icons.large,
    textAlign: 'center'
  }
})
