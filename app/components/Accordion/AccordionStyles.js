import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  row: {
    padding: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: 50,
  },
  notLast: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  header: {
    flex: 1
  },
  headerText: {
  },
  icon: {
    fontSize: Metrics.icons.md,
    color: Colors.primary,
  },
  description: {
    padding: Metrics.smallMargin,
  },
  descriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary,
  },
  isActive: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  }
})
