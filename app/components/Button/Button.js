// @flow
import React from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../themes'
import Color from 'color'
import { Txt } from '../'
import typeof { ButtonProps } from './ButtonProps'
import s from './ButtonStyles'
import { noop } from '../../utils/utils'

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    uppercase: true,
    type: 'default',
  }

  render () {
    const {
      children,
      type,
      style,
      textStyle,
      outline,
      onClick,
      uppercase,
      icon,
      size,
      disabled,
    } = this.props

    const ComponentProp = type === 'link' ? TouchableOpacity : TouchableHighlight

    return (
      <ComponentProp
        activeOpacity={!disabled ? 0.4 : 1}
        style={[s.btn, s[`${type}${outline ? 'Outline' : ''}`], size && s[size], disabled && {opacity: 0.4}, style]}
        underlayColor={!disabled ? (outline ? Colors.transparent : Color(Colors[type]).darken(0.1)) : (outline ? Colors.transparent : Color(Colors[type]))}
        onPress={() => !disabled ? onClick() : noop}
      >
        <View style={s.textWrapper}>
          {icon}
          {children && (
            <Txt style={[s.text, s[`${type}${outline ? 'Outline' : ''}Text`], textStyle]}>
              {uppercase && typeof children === 'string' ? children.toUpperCase() : children}
            </Txt>
          )}
        </View>
      </ComponentProp>
    )
  }
}

export default Button
