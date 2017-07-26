import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  safeData: {
    marginVertical: Metrics.smallMargin,
  },
  safeDataText: {
    textAlign: 'center',
    color: Colors.lightGrey
  },
  safeDataLabel: {
    fontWeight: '400'
  }
})
