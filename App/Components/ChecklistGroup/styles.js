import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  groupNameWrapper: {
    padding: Metrics.smallMargin,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  item: {
    padding: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemLink: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: Metrics.smallMargin
  },
  itemArrow: {
    fontSize: Metrics.icons.medium
  },
})
