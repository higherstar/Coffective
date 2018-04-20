import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 100,
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
  checklistHeader: {
    marginBottom: Metrics.smallMargin,
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
    backgroundColor: Colors.primary,
    borderRadius: 14,
    padding: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    minHeight: 200,
    ...Metrics.boxShadow,
  },
  buildTeamHeader: {
    marginBottom: Metrics.smallMargin,
  },
  buildTeamHeaderText: {
    fontSize: Fonts.size.h1,
    color: Colors.white,
    fontWeight: '300',
  },
  buildTeamDescription: {
    marginBottom: Metrics.doubleBaseMargin,
  },
  buildTeamDescriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
})
