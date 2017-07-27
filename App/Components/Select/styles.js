import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  selectContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  selectedOptionText: {
    color: Colors.inputText,
    fontSize: Fonts.size.regular
  },
  selectMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  selectWrapper: {
    backgroundColor: Colors.white,
    height: 0,
    overflow: 'hidden'
  },
  headerActions: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  picker: {
    color: Colors.inputText
  },
  confirmBtn: {
    paddingHorizontal: Metrics.baseMargin,
    height: 'auto'
  },
  confirmText: {
    color: Colors.primary,
  },
  cancelBtn: {
    paddingHorizontal: Metrics.baseMargin,
    height: 'auto'
  },
  cancelText: {
  }
})
