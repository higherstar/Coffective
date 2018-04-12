// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import s from './LinkStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {Txt} from '../'
import { noop } from '../../utils/utils'

class Link extends React.Component {
  static defaultProps = {
    onClick: noop,
    prefixType: 'icon'
  }

  render () {
    const {style, prefixStyle, textStyle, children, onClick, prefixType, prefix, iconColor, contentStyle} = this.props
    return (
      <View style={[s.item, prefix && prefixType === 'checkbox' && s.hasPrefix, style]}>
        {prefix && prefixType === 'checkbox' && <View style={s.prefix}>{prefix}</View>}
        <TouchableOpacity activeOpacity={0.7} style={s.link} onPress={onClick}>
          {prefix && prefixType === 'icon' && <View style={[s.prefix, prefixStyle]}>{prefix}</View>}
          {typeof children === 'string' ? (
            <Txt.View style={[s.content, prefix && prefixType === 'icon' && s.hasPrefix]} textStyle={textStyle}>
              {children}
            </Txt.View>
          ) : (
            <View style={[s.content, contentStyle]}>
              {children}
            </View>
          )}
          <Icon
            style={[s.icon, iconColor && {color: iconColor}]}
            name='angle-right'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Link
