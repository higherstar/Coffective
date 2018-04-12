import { StyleSheet } from 'react-native'
import {Colors, Metrics, Fonts, AppStyles} from '../../themes'

const prefixWidth = 50
const itemHeight = 50

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    minHeight: itemHeight,
    position: 'relative',
    alignItems: 'center',
    paddingRight: Metrics.smallMargin,
  },
  label: {
  },
  labelText: {
    color: Colors.grey,
  },
  valueText: {
    flex: 1,
    marginLeft: Metrics.smallMargin,
    textAlign: 'right',
  },
  prefix: {
    minWidth: prefixWidth,
    alignSelf: 'center',
    alignItems: 'center',
  },
})
