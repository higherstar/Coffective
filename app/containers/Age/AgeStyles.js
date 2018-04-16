import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

const tileSize = (Metrics.screenWidth - (Metrics.marginX * 2) - Metrics.smallMargin) / 2

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
  },
  head: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 220,
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
  content: {
    flex: 1,
  },
  ages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.marginX
  },
  age: {
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
