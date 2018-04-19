import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
  },
  backgroundImage: {
    ...Metrics.backgroundFullScreenImage,
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
    // to make image in center of the bottom of woman
    marginLeft: Metrics.doubleBaseMargin,
  },
  footer: {
    flexBasis: '40%',
    paddingHorizontal: Metrics.marginX,
  },
  pickerWrapper: {
  },
  picker: {
    height: 45,
    alignSelf: 'flex-end',
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  submitBtn: {
    ...Metrics.boxShadow,
  },
  submitIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.lg,
    color: Colors.primary,
  },
  pickerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    marginVertical: Metrics.smallMargin,
  },
  expectation: {
    color: Colors.white,
  },
  line: {
    backgroundColor: Colors.whiteMuted,
    width: 1,
    height: 20,
    alignSelf: 'flex-end',
    paddingBottom: 10,
  },
  long: {
    height: 35,
  },
  selected: {
    backgroundColor: Colors.white,
    width: 2,
    height: 45,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // screen width with paddings and line width / 2
    left: (Metrics.screenWidth - Metrics.doubleBaseMargin - 1) / 2,
    bottom: 0,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: Colors.whiteMuted,
    position: 'absolute',
    bottom: -7.5,
    left: -7.5,
    right: 0,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: -2.5,
    left: -2.5,
    right: 0,
  },
})
