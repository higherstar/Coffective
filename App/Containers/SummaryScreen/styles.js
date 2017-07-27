import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
  },
  summaryTitle: {
    marginTop: Metrics.containerMarginX,
    paddingBottom: Metrics.smallMargin
  },
  summaryTitleText: {
    textAlign: 'center'
  },
  restartBtn: {
    marginHorizontal: Metrics.containerMarginX,
    marginVertical: Metrics.baseMargin,
  },
  rows: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    marginLeft: Metrics.containerMarginX,
  },
  label: {
    width: 140,
    paddingVertical: Metrics.smallMargin * 1.5,
    paddingRight: Metrics.smallMargin * 1.5,
  },
  labelText: {
    fontWeight: '400'
  },
  value: {
    flex: 1,
    padding: Metrics.smallMargin * 1.5
  },
  valueText: {
  }
})
