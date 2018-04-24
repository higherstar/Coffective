import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

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
  cardTitleText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  cardDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
    marginBottom: 0,
  },
  cardTitle: {
    marginBottom: Metrics.smallMargin,
  },
  cardDescription: {
    marginBottom: Metrics.smallMargin,
  },
  houseHoldText: {
    color: '#D8D8D8',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  houseHoldCard: {
    width: 110,
    height: 97,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 22,
    height: 18,
  },
  arrowIcon: {
    width: 7,
    height: 12,
  },
  textHead: {
    paddingLeft: 10,
  },
  cost: {},
  headView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  houseHoldIncome: {
    marginTop: 20,
  },
  buttomSpecial: {
    height: 65,
    borderRadius: 0,
  },
  list: {
    marginTop: Metrics.smallMargin,
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: 200,
    flex: 1,
  },
})
