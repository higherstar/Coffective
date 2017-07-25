import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  learnMore: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: Metrics.baseMargin
  },
  backgroundImage: {
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    flex: 1,
  }
})
