import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

const row = {
  borderBottomWidth: 1,
  borderBottomColor: Colors.black,
  paddingHorizontal: Metrics.containerMarginX,
  paddingVertical: Metrics.smallMargin
}

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    minHeight: Metrics.screenHeight - Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    ...row,
  },
  avatar: {
    fontSize: Metrics.icons.large
  },
  name: {
    marginLeft: Metrics.smallMargin
  },
  row,
  valueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueWrapperEditable: {
  },
  value: {
    flex: 1,
  },
  valueEditable: {
    flex: 1,
    marginBottom: Metrics.smallMargin
  },
  labelText: {
    color: Colors.primary
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: Metrics.smallMargin,
  }
})
