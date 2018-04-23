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
})
