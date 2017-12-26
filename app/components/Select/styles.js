import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes/'

export default StyleSheet.create({
  selectContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  selectedOptionText: {
    color: Colors.inputText,
    fontSize: Fonts.size.normal
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
  androidPicker: {
    color: Colors.inputText,
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
  },
  iosArrowDown: {
    width: 22,
    height: 20,
    position: 'absolute',
    right: 0,
    top: -4,
    bottom: 0,
  },
  iosField: {
    position: 'relative'
  }
})
