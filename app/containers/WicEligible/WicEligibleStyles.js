import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  scrollContent: {
    padding: Metrics.smallMargin
  },
  head: {
    height: Metrics.navBarHeight
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1
  },
  card: {
    marginBottom: Metrics.smallMargin
  },
  cardTitleText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300'
  },
  cardDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
    marginBottom: 0
  },
  cardTitle: {
    marginBottom: Metrics.smallMargin
  },

  cardTitleBottom: {
    // marginBottom: Metrics.smallMargin,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',

    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  cardDescription: {
    marginBottom: Metrics.smallMargin
  },
  houseHoldText: {
    color: '#D8D8D8'
  },
  time: {
    color: '#A1B0C2',
    fontFamily: Fonts.type.secondary,
    fontSize: 13
  },
  cost: {
    color: '#11C4FF',
    fontFamily: Fonts.type.secondary,
    fontSize: 24
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -10
  },
  info: {
    color: '#A1B0C2',
    fontSize: 16
  },
  houseHoldCard: {
    width: 110,
    height: 97,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    width: 22,
    height: 18
  },
  arrowIcon: {
    width: 7,
    height: 12
  },
  textHead: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10
  },
  member: {
    marginLeft: 20,
    color: '#A1B0C2'
  },
  howmuch: {
    color: '#000'
  },
  headView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  houseHoldIncome: {
    marginTop: 20
  },
  buttonSpecial: {
    height: 65,
    borderRadius: 0,
    marginHorizontal: -10
  },
  list: {
    marginTop: Metrics.smallMargin
  },
  image: {
    resizeMode: 'cover',
    width: null,
    height: 200,
    flex: 1
  }
})
