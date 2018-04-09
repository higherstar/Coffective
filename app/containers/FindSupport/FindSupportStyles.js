import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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
  actions: {
    padding: Metrics.baseMargin,
  },
  actionsFooter: {
    flexDirection: 'row',
  },
  zipInput: {
    flex: 1,
  },
  goBtn: {
    marginLeft: Metrics.smallMargin,
    flexBasis: '25%',
  },
  // TODO https://github.com/react-community/react-native-maps/issues/118
  mapWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  orgTypeSelect: {
    marginBottom: Metrics.smallMargin,
  }
})
