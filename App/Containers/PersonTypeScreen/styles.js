import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  personType: {
    // TODO make it generic
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 3
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end'
  },
  nameWrapper: {
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
    // TODO make it generic - two lines text
    maxWidth: 120
  },
  name: {
    color: Colors.white,
    backgroundColor: 'transparent'
  }
})
