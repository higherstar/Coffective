import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    paddingHorizontal: Metrics.containerMarginX,
    paddingVertical: Metrics.smallMargin,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    color: Colors.primary,
    fontWeight: '500'
  },
  rowIcon: {
    fontSize: Metrics.icons.medium,
    color: Colors.primary,
    width: 20
  },
  selectedSection: {
  },
  title: {
    marginVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.containerMarginX,
  },
  titleText: {
    textAlign: 'center',
    color: Colors.primary,
  },
  description: {
    marginVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.containerMarginX,
  },
  descriptionText: {
    textAlign: 'center',
  },
  button: {
    borderColor: Colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: Metrics.smallMargin,
  }
})
