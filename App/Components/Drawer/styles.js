import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'ios' ? 20 : 0,
    // paddingVertical: 4,
  },
  drawerHeader: {
    height: 120,
    backgroundColor: Colors.primary
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    marginVertical: Metrics.smallMargin * 1.5,
    marginHorizontal: Metrics.baseMargin,
  },
})
