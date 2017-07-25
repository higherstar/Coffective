import EStyleSheet from 'react-native-extended-stylesheet'
import { Metrics, Colors, Fonts } from '../../Themes'

export default EStyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1
  },
  wantThisBtn: {
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // ios
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    // android 5.0+
    elevation: 2,
  },
  wantThisIcon: {
    fontSize: Metrics.icons.medium,
    color: Colors.primary,
    marginRight: Metrics.smallMargin
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: 180
  },
  titleWrapper: {
    marginVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.h3,
  },
  descriptionWrapper: {
    paddingHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  subtitleWrapper: {
    paddingHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  subtitle: {
    ...Fonts.style.h5,
  },
  getStarted: {
    margin: Metrics.baseMargin,
  },
  findOutMore: {
    marginTop: Metrics.baseMargin
  },
  tabView: {
    paddingHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  tabUnderline: {
    backgroundColor: Colors.transparent
  },
  tabBar: {
    borderBottomWidth: 0,
    height: 80,
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin,
  },
  tabIcon: {
    fontSize: Metrics.icons.medium,
    marginBottom: Metrics.exSmallMargin
  },
  tab: {
    backgroundColor: Colors.grey,
    borderRadius: Metrics.tabBorderRadius,
    paddingHorizontal: Metrics.smallMargin,
    width: (Metrics.screenWidth - Metrics.doubleBaseMargin - 20) / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginTop: Metrics.baseMargin
  },
  learnMore: {
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  accordionRow: {
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  'accordionRow:first-child': {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
  accordionHeaderWrapper: {
    flex: 1
  },
  accordionHeader: {
    fontWeight: 'bold',
    fontSize: Fonts.size.medium
  },
  accordionRowIcon: {
    fontSize: Metrics.icons.medium,
    width: 20
  },
  accordionContentWrapper: {
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
  accordionContentWrapperActive: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  }
})
