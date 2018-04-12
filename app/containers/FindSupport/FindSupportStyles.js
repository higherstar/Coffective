import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics} from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight
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
    paddingTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
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
  mapWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxHeight: Metrics.screenHeight - Metrics.navBarHeight,
  },
  hasPlaces: {
    maxHeight: Metrics.screenHeight - Metrics.navBarHeight - 100,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  orgTypeSelect: {
    marginBottom: Metrics.smallMargin,
  },
  placesWrapper: {
    marginTop: Metrics.screenHeight - Metrics.navBarHeight - 130 - 100,
  },
  placesHeader: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    padding: Metrics.smallMargin,
    backgroundColor: Colors.white,
  },
  placesHeaderText: {
    fontFamily: Fonts.type.secondary,
    color: Colors.grey,
    fontSize: Fonts.size.medium,
    fontWeight: '500',
  },
  placeLink: {
    backgroundColor: Colors.white,
  },
  placeLinkContent: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  placeImageWrapper: {
    padding: Metrics.baseMargin,
    alignSelf: 'flex-start',
  },
  placeImage: {
    width: 25,
    height: 25,
  },
  header: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
  },
  headerText: {},
  lastUpdate: {
    marginBottom: Metrics.smallMargin,
  },
  lastUpdateText: {
    color: Colors.primary,
    fontSize: Fonts.size.small,
  },
  description: {
    marginBottom: Metrics.baseMargin,
  },
  descriptionText: {
    color: Colors.grey,
    fontSize: Fonts.size.small,
  },
})
