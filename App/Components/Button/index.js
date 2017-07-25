// @flow

import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../../Themes'
import { Txt } from '../'
import type { TButton } from './types'
import s from './styles'

const Button = ({ children, style, txtStyle, btnType = 'primary', outline, onPress, underlayColor, icon }: TButton) =>
  <TouchableHighlight
    style={[s.btn, s[outline ? `${btnType}Outline` : btnType], style || {}]}
    underlayColor={underlayColor || Colors[outline ? 'white' : `${btnType}Dark`]}
    onPress={onPress}
  >
    <View style={s.wrapper}>
      <Txt style={[s.text, s[outline ? `${btnType}OutlineText` : `${btnType}Text`], txtStyle || {}]}>
        {children}
      </Txt>
      {icon && <Icon
        name={icon}
        size={Metrics.icons.medium}
        style={s.icon}
      />}
    </View>
  </TouchableHighlight>

export default Button
