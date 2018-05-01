import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 75,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  title: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
    marginHorizontal: 0,
  },
  content: {
    paddingHorizontal: Metrics.marginX,
    marginBottom: Metrics.baseMargin,
    flex: 1,
  },
  checklistCard: {
    position: 'relative',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    minHeight: 200,
    ...Metrics.boxShadow,
  },
  checklistHeaderText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  checklistDescription: {
    marginBottom: Metrics.smallMargin,
  },
  checklistDescriptionText: {
    color: '#8E8E93',
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
    fontSize: Fonts.size.medium,
  },
  buildTeamCard: {
    position: 'relative',
    borderRadius: 14,
    padding: Metrics.baseMargin,
    paddingTop: 6.2 * Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    minHeight: 200,
    ...Metrics.boxShadow,
  },
  buildTopTeamCard: {
    position: 'relative',
    borderRadius: 14,
    padding: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    minHeight: 200,
    ...Metrics.boxShadow,
  },
  buildTopTeamHeaderText: {
    fontSize: Fonts.size.medium,
    color: Colors.blackMuted,
    fontWeight: '300',
  },
  buildTopTeamDescriptionText: {
    color: Colors.black,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.h1,
  },
  buildTeamHeaderText: {
    fontSize: Fonts.size.h1,
    color: Colors.white,
    fontWeight: '300',
  },
  buildTeamDescriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
  dots: {
    position: 'absolute',
    right: Metrics.baseMargin,
    top: Metrics.baseMargin
  },
  dot: {
    backgroundColor: Colors.blueMuted
  },
  activeDot: {
    backgroundColor: Colors.blue
  },
  itemWrapper: {
    marginTop: Metrics.baseMargin,
  },
  item: {
    position: 'relative',
    flex: 1,
  },
  itemContent : {
    flex: 1,
    flexDirection: 'row'
  },
  slideImage: {
    resizeMode: 'cover',
    flex: .35,
    borderRadius: 20
  },
  slideTextBody: {
    height: 110,
    overflow: 'hidden',
  },
  slideTextRightBody: {
    paddingLeft: 10,
    height: 110,
    overflow: 'hidden',
    flex: .65
  },
  subHeader: {
    marginBottom: Metrics.smallMargin,
  },
  subHeaderText: {
    fontWeight: '500',
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    color: Colors.blackMuted,
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    fontWeight: '300',
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
  description: {},
  descriptionText: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.small,
    color: Colors.muted,
  },
  more: {
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 30,
    width: 60,
    backgroundColor: Colors.white,
    position: 'absolute',
    right: 0,
    bottom : 10,
    shadowColor: Colors.white,
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreText: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    color: Colors.blue,
  },
})
