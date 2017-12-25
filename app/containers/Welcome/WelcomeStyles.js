import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    backgroundColor: Colors.transparent,
    marginTop: 'auto',
  },
  header: {
    paddingHorizontal: Metrics.marginX,
    paddingBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: Metrics.marginX,
  },
  descriptionText: {
    color: Colors.white,
    textAlign: 'center',
  },
  getStartedBtn: {
    marginTop: Metrics.doubleBaseMargin,
    height: Metrics.footerBtnHeight,
    borderRadius: 0,
  },
})
