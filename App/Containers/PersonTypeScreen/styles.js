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
  personTypeWrapper: {
  },
  personType: {
    width: (Metrics.screenWidth - Metrics.doubleBaseMargin * 2) / 2,
    height: 150,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    marginBottom: Metrics.baseMargin,
    borderRadius: 4,
  },
  selectedPersonType: {
    borderColor: Colors.primary
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
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
    // android 5.0+
    elevation: 3,
  },
  checkMark: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: -10,
    bottom: 10,
  }
})
