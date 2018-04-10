import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  header: {
    paddingHorizontal: Metrics.marginX,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  section: {
    marginLeft: Metrics.marginX,
    paddingRight: Metrics.marginX,
    paddingVertical: Metrics.baseMargin,
  },
  notLast: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  sectionHeader: {
    marginBottom: Metrics.smallMargin,
  },
  sectionHeaderText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
  },
  sectionDescription: {
  },
  sectionDescriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  },
  actions: {
    alignSelf: 'center',
    paddingBottom: Metrics.marginX,
  },
  submitBtn: {
    ...Metrics.boxShadow,
  },
  submitIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
})
