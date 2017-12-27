import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    paddingHorizontal: Metrics.marginX,
    minHeight: 150,
    // TODO replace with image
    backgroundColor: Colors.primary,
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
    fontWeight: '500',
    fontSize: Fonts.size.medium,
  },
  haveAccountText: {
    color: Colors.muted,
  },
  content: {
    position: 'relative',
    flex: 1,
  },
  footer: {
    paddingHorizontal: Metrics.marginX,
    paddingVertical: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    marginLeft: Metrics.exSmallMargin
  },
  personTypes: {
    position: 'absolute',
    top: -75,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.marginX
  },
  personType: {
    borderRadius: 7,
    backgroundColor: Colors.white,
    // TODO make it flexible for smaller screens
    height: 150,
    width: (Metrics.screenWidth - (Metrics.marginX * 2) - Metrics.smallMargin) / 2,
    marginBottom: Metrics.smallMargin,
    ...Metrics.boxShadow,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    flex: 1,
    marginTop: Metrics.smallMargin
  },
  name: {
    padding: Metrics.smallMargin,
  },
  nameText: {
    textAlign: 'center',
  },
})
