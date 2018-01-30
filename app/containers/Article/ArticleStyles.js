import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: Metrics.smallMargin,
  },
  head: {
    height: Metrics.navBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    marginBottom: Metrics.smallMargin,
  },
  sectionHeader: {
    marginVertical: Metrics.smallMargin,
  },
  sectionHeaderText: {
    fontWeight: '300',
    fontSize: Fonts.size.h1,
  },
  submit: {
    borderRadius: 0,
  },
  item: {
    position: 'relative',
    flex: 1,
  },
  itemImage: {
    resizeMode: 'cover',
    width: null,
    height: 220,
    flex: 1,
  },
  itemDescriptionWrapper: {
    flexDirection: 'row',
  },
  itemIndex: {
    maxWidth: 50,
    flex: 1,
    justifyContent: 'center',
    // TODO fix for border - overflow hidden breaks boxShadow
    borderBottomLeftRadius: 7,
  },
  itemIndexText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
    textAlign: 'center'
  },
  itemDescription: {
    // fix for cropped line
    flex: 2,
    padding: Metrics.smallMargin * 1.5,
  },
  itemDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
  },
  dots: {
    position: 'absolute',
    right: Metrics.baseMargin,
    top: Metrics.baseMargin
  }
})
