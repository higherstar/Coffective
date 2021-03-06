import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

const prefixWidth = 50

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    paddingTop: Metrics.doubleBaseMargin,
    height: 170,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 100,
    flexDirection: 'row',
    paddingHorizontal: Metrics.smallMargin,
  },
  content: {
    flex: 1,
  },
  headerWrapper: {
    marginLeft: Metrics.smallMargin,
    flex: 1,
  },
  header: {
    marginBottom: Metrics.smallMargin,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fonts.size.h3,
    fontWeight: '300',
  },
  subHeader: {},
  subHeaderText: {
    color: Colors.white,
  },
  item: {
    height: 65,
    alignItems: 'center',
    paddingLeft: Metrics.baseMargin,
    flexDirection: 'row',
  },
  label: {},
  labelText: {
    color: Colors.drawerLabel,
    fontSize: Fonts.size.h6,
  },
  iconWrapper: {
    minWidth: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    height: 21,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginLeft: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
  },
  progress: {
    marginHorizontal: Metrics.smallMargin,
  },
  progressText: {},
  progressNumber: {
    color: Colors.white,
    fontWeight: '300',
    fontSize: Fonts.size.h3,
    textAlign: 'center',
  },
  progressUnit: {
    fontFamily: Fonts.type.secondary,
    color: Colors.white,
    fontWeight: '500',
    fontSize: 8,
    textAlign: 'center',
  },
})
