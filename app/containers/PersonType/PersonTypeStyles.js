import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

const tileSize = (Metrics.screenWidth - (Metrics.marginX * 2) - Metrics.smallMargin) / 2
const footerHeight = 55

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: footerHeight,
  },
  head: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 200,
    overflow: 'hidden',
    borderBottomRightRadius: 100,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  header: {
    marginBottom: Metrics.smallMargin,
    paddingHorizontal: Metrics.marginX,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  description: {
    marginBottom: Metrics.baseMargin,
    paddingHorizontal: Metrics.marginX,
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
  footer: {
    paddingHorizontal: Metrics.marginX,
    paddingVertical: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    position: 'absolute',
    height: footerHeight,
    bottom: 0,
    right: 0,
    left: 0,
  },
  loginBtn: {
    marginLeft: Metrics.exSmallMargin
  },
  personTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.marginX
  },
  personType: {
    borderRadius: 7,
    backgroundColor: Colors.white,
    minHeight: 120,
    width: tileSize,
    marginBottom: Metrics.smallMargin,
    ...Metrics.boxShadow,
  },
  image: {
    flex: 1,
    width: tileSize * 0.5,
    height: tileSize * 0.5,
    marginTop: Metrics.smallMargin,
    alignSelf: 'center',
  },
  name: {
    padding: Metrics.smallMargin,
  },
  nameText: {
    textAlign: 'center',
  },
})
