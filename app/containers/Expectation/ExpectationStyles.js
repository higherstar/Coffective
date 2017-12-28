import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'
import Color from 'color'

export default StyleSheet.create({
  container: {
    // TODO replace with image
    backgroundColor: Colors.primary,
    flex: 1,
  },
  content: {
    flexBasis: '60%',
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
    flexBasis: '40%',
    backgroundColor: Color(Colors.primary).darken(0.1),
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
