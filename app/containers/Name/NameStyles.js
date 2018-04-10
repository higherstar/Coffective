import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
    flex: 1,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
    marginBottom: Metrics.doubleBaseMargin,
  },
  descriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  },
  label: {
    marginBottom: Metrics.smallMargin,
  },
  labelText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
    fontWeight: '500',
  },
  actions: {
    marginBottom: Metrics.doubleBaseMargin * 2,
    alignSelf: 'center'
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
