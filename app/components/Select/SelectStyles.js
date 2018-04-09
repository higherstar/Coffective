import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes/'

export default StyleSheet.create({
  viewContainer: {
    alignSelf: 'stretch',
    // input styles
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.inputBorderRadius,
    backgroundColor: Colors.white,
  },
  input: {
    fontSize: Fonts.size.input,
    height: Metrics.inputSizes.md,
    color: Colors.inputText,
  },
  chevron: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    borderTopWidth: 1.5,
    borderTopColor: '#D0D4DB',
    borderRightWidth: 1.5,
    borderRightColor: '#D0D4DB',
  },
  chevronUp: {
    transform: [
      {translateY: 17},
      {rotate: '-45deg'},
    ],
  },
  chevronDown: {
    transform: [
      {translateY: 8},
      {rotate: '135deg'},
    ],
  },
  chevronActive: {
    borderTopColor: '#007AFE',
    borderRightColor: '#007AFE',
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: 'gray',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 22.5,
    right: 0,
  },
  modalViewTop: {
    flex: 1,
  },
  modalViewMiddle: {
    height: 44,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EFF1F2',
    borderTopWidth: 0.5,
    borderTopColor: '#919498',
  },
  modalViewBottom: {
    height: 215,
    justifyContent: 'center',
    backgroundColor: '#D0D4DB',
  },
  done: {
    color: '#007AFE',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
  },
  underline: {
    borderTopWidth: 1,
    borderTopColor: '#888988',
    marginHorizontal: 4,
  },
})
