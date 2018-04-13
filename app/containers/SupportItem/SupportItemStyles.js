import {StyleSheet} from 'react-native'
import {AppStyles, Colors, Fonts, Metrics} from '../../themes'

const iconSize = 50
const iconBorderWidth = 3

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Metrics.smallMargin,
  },
  head: {
    height: Metrics.navBarHeight,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  image: {
    width: null,
    height: 200,
  },
  card: {
    marginBottom: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
  },
  cardBody: {},
  iconWrapper: {
    width: iconSize,
    height: iconSize,
    position: 'absolute',
    top: -iconSize / 2,
    borderRadius: 7,
    borderColor: Colors.white,
    borderWidth: iconBorderWidth,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: iconSize - iconBorderWidth,
    height: iconSize - iconBorderWidth,
    alignSelf: 'center',
  },
  lastUpdate: {
    marginTop: Metrics.baseMargin * 1.5,
  },
  lastUpdateText: {
    color: Colors.primary,
    fontSize: Fonts.size.small,
    textAlign: 'center',
  },
  websiteText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: Fonts.size.small,
  },
  websiteIcon: {
    ...AppStyles.inputIcon,
    color: Colors.primary,
  },
  listItemIcon: {
    paddingVertical: 8,
    fontSize: 5,
    color: Colors.grey,
  },
  listItemTitle: {
    color: Colors.black,
  },
  weServeCardBody: {
    padding: Metrics.smallMargin,
  },
  requirementsCardBody: {
    padding: Metrics.smallMargin,
  },
  header: {
    margin: Metrics.smallMargin,
  },
  headerText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  breastPumps: {
    marginTop: Metrics.smallMargin,
  }
})
