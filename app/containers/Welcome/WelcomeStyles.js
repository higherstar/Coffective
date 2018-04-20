import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    backgroundColor: Colors.transparent,
    justifyContent: 'flex-end',
    flex: 1,
  },
  header: {
    paddingHorizontal: Metrics.marginX,
    paddingBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
    paddingHorizontal: Metrics.marginX,
  },
  descriptionText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.type.secondary
  },
  getStartedBtn: {
    marginTop: Metrics.doubleBaseMargin,
    borderRadius: 0,
  },
})
