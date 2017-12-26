import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: Metrics.smallMargin * 1.5,
    paddingVertical: Metrics.baseMargin * 1.5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  subHeader: {
    marginBottom: Metrics.smallMargin,
  },
  subHeaderText: {
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
  },
  description: {
  },
  descriptionText: {
  },
})
