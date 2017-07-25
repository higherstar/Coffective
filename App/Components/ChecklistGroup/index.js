// @flow

import React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-check-box'
import { Txt } from '../'
import s from './styles'

// TODO move to constants
const colors = [
  '#C08D62',
  '#FF74BC',
  '#FDBBA0',
  '#F5CB62',
  '#98D797',
]

const colors2 = [
  '#F2E7DF',
  '#FFEFF7',
  '#FFFAF8',
  '#FCF7EB',
  '#EAFBE9',
]

const ChecklistGroup = ({ index, name, items, onPress }) =>
  <View style={s.group}>
    <View
      style={[s.groupNameWrapper, {
        backgroundColor: colors2[index],
        borderTopColor: colors[index],
        borderBottomColor: colors[index]
      }]}>
      <Txt style={[s.groupName, { color: colors[index] }]}>{name}</Txt>
    </View>
    {items.map((item, j) =>
      <View key={j} style={s.item}>
        <CheckBox
          onClick={()=>{}}
          isChecked={true}
        />
        <TouchableOpacity style={s.itemLink} onPress={() => onPress(item)}>
          <View style={s.itemNameWrapper}>
            <Txt style={s.itemName}>{item.name}</Txt>
          </View>
          <Icon
            style={s.itemArrow}
            name='keyboard-arrow-right'
          />
        </TouchableOpacity>
      </View>
    )}
  </View>

export default ChecklistGroup
