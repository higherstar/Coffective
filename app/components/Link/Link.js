// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import s from './LinkStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { noop } from '../../utils/utils'

class Link extends React.Component {
  static defaultProps = {
    onClick: noop,
  }

  render () {
    const {style, children, onClick, prefix} = this.props
    return (
      <View style={[s.item, style]}>
        {prefix && <View style={s.prefix}>{prefix}</View>}
        <TouchableOpacity activeOpacity={0.7} style={s.link} onPress={onClick}>
          {children}
          <Icon
            style={s.icon}
            name='angle-right'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Link
