import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.smallMargin,
  },
  head: {
    height: Metrics.navBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    marginBottom: Metrics.smallMargin,
  },
  cardText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary
  }
})
