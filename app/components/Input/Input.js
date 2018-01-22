// @flow
import React from 'react'
import { TextInput, View } from 'react-native'
import { Colors } from '../../themes'
import s from './InputStyles'

class Input extends React.Component {
  static defaultProps = {
    size: 'md',
  }

  render () {
    const {style, inputStyle, refField, prefix, suffix, size, ...props} = this.props
    return (
      <View style={[s.wrapper, style]}>
        {prefix}
        <TextInput
          underlineColorAndroid='transparent'
          textAlignVertical='center'
          autoCapitalize='none'
          placeholderTextColor={Colors.inputPlaceholder}
          autoCorrect={false}
          style={[s.input, s[size], prefix && s.hasPrefix, suffix && s.hasSuffix, inputStyle]}
          {...props}
          ref={refField}
        />
        {suffix}
      </View>
    )
  }
}

export default Input
