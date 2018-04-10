import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
  },
  content: {
    flexBasis: '55%',
    paddingHorizontal: Metrics.marginX,
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
    marginBottom: Metrics.baseMargin,
  },
  descriptionText: {
    color: Colors.white,
    fontFamily: Fonts.type.secondary,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: Metrics.screenWidth * 0.5
  },
  footer: {
    flexBasis: '45%',
    paddingHorizontal: Metrics.marginX,
  },
  picker: {
    flex: 1,
  },
  actions: {
    flex: 1,
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
