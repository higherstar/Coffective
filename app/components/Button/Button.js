// @flow
import React from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Colors } from '../../themes'
import Color from 'color'
import { Txt } from '../'
import typeof { ButtonProps } from './ButtonProps'
import s from './ButtonStyles'

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    uppercase: true,
    type: 'default',
    size: 'default',
  }

  render () {
    const {
      children,
      type,
      style,
      textType,
      textStyle,
      outline,
      onClick,
      // underlayColor,
      uppercase,
      icon,
      size,
      disabled,
      loading,
    } = this.props

    const ComponentProp = type === 'link' ? TouchableOpacity : TouchableHighlight

    const iconType = loading ? 'loading' : icon
    const iconNode = iconType ? <Icon name={iconType} style={[s.icon, s[`${size}Icon`]]}/> : null

    return (
      <ComponentProp
        activeOpacity={!disabled ? 0.4 : 1}
        style={[s.btn, s[`${type}${outline ? 'Outline' : ''}`], s[size], disabled && {opacity: 0.4}, style]}
        underlayColor={!disabled ? (outline ? Colors.transparent : Color(Colors[type]).darken(0.1)) : (outline ? Colors.transparent : Color(Colors[type]))}
        onPress={() => !disabled ? onClick() : () => {}}
      >
        <View style={s.wrapper}>
          {iconNode}
          <Txt textType={textType} style={[s.text, s[`${type}${outline ? 'Outline' : ''}Text`], textStyle]}>
            {uppercase && typeof children === 'string' ? children.toUpperCase() : children}
          </Txt>
        </View>
      </ComponentProp>
    )
  }
}

export default Button
