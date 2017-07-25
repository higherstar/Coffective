// @flow

import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Txt } from '../'
import { Colors } from '../../Themes'
import s from './styles'

// TODO move to constants
const colors = [
  '#C08D62',
  '#FF74BC',
  '#FDBBA0',
  '#F5CB62',
  '#98D797',
]

const ChecklistTab = ({ name, index, onPressHandler, onLayoutHandler }) =>
  <TouchableOpacity
    key={index}
    accessible
    accessibilityLabel={name}
    accessibilityTraits='button'
    onPress={() => onPressHandler(index)}
    onLayout={onLayoutHandler}
  >
    <View style={s.tabNameWrapper}>
      <Txt style={{ color: index === 0 ? Colors.primary : colors[index - 1] }}>
        {name}
      </Txt>
    </View>
  </TouchableOpacity>

export default ChecklistTab
