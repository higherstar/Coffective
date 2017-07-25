// @flow

import React from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../../Themes'
import Color from 'color'
import { Txt } from '../'
import type { TButton } from './types'
import s from './styles'

const Button = ({
  children,
  style,
  textStyle,
  textType,
  btnType = 'primary',
  outline,
  onPress,
  underlayColor,
  uppercase = true,
  icon,
  size = 'md'
}: TButton) => {
  const ComponentClass = (btnType === 'link' || outline) ? TouchableOpacity : TouchableHighlight
  return (
    <ComponentClass
      activeOpacity={0.4}
      style={[s.btn, s[`${btnType}${outline ? 'Outline' : ''}`], s[size], style]}
      underlayColor={underlayColor || Color(Colors[btnType]).darken(0.1)}
      onPress={onPress}
    >
      <View style={s.wrapper}>
        <Txt textType={textType} style={[s.text, s[`${btnType}${outline ? 'Outline' : ''}Text`], textStyle]}>
          {uppercase ? children.toUpperCase() : children}
        </Txt>
        {icon && <Icon
          name={icon}
          size={Metrics.icons.medium}
          color={Colors[btnType]}
          style={s.icon}
        />}
      </View>
    </ComponentClass>
  )
}

export default Button
