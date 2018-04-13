// @flow
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Txt} from '../../components'
import s from './LabelStyles'
import {noop} from '../../utils/utils'

class Label extends React.Component {
  render() {
    const {style, prefix, label, value, labelTextStyle, onClick, ...props} = this.props
    return (
      <TouchableOpacity activeOpacity={onClick ? 0.7 : 1} onPress={onClick || noop} style={[s.wrapper, style]}>
        {prefix && <View style={s.prefix}>{prefix}</View>}
        {label && (
          <Txt style={[s.labelText, !prefix && s.noPrefix, labelTextStyle]}>
            {label}
          </Txt>
        )}
        {value && (
          <Txt
            style={s.valueText}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {value}
          </Txt>
        )}
      </TouchableOpacity>
    )
  }
}

export default Label
