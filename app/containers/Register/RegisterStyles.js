import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.marginX,
    // TODO replace with image
    backgroundColor: Colors.primary,
    flex: 1,
  },
  content: {
    flex: 2,
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
  password: {},
  passwordIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
  footer: {
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookBtn: {
    marginRight: Metrics.baseMargin,
  },
  facebookBtnText: {
    textAlign: 'left',
    // TODO fix it - make it flexible
    maxWidth: 150,
  },
  facebookIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
    paddingHorizontal: Metrics.baseMargin,
  },
  submitBtn: {
  },
  submitIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
})
