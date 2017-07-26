import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: Metrics.containerMarginX,
  },
  iAm: {
    paddingVertical: Metrics.baseMargin
  },
  iAmText: {
    textAlign: 'center'
  },
  personTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.smallMargin
  },
  personType: {
    width: (Metrics.screenWidth - Metrics.doubleBaseMargin * 2) / 2,
    height: 150,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    marginBottom: Metrics.baseMargin,
    borderRadius: 4
  },
  selectedPersonType: {
    borderColor: Colors.primary
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
  },
  name: {
    padding: Metrics.smallMargin,
  },
  nameText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: Fonts.size.medium
  },
  // TODO
  proceedBtn: {
    marginHorizontal: Metrics.containerMarginX,
    marginBottom: Metrics.containerMarginX,
    // ios
    shadowColor: '#424242',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    // android 5.0+
    elevation: 2,
  },
})
