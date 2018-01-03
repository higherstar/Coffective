import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: Metrics.marginX,
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
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
  email: {
  },
  emailIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
  submitBtn: {
  },
})
