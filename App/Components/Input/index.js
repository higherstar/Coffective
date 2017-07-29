// @flow

import React, { Component } from 'react'
import { View, TextInput, Image } from 'react-native'
import type { TInput } from './types'
import { Colors } from '../../Themes'
import s from './styles'

/*
 * Code is improved and used from
 * https://github.com/danielweinmann/react-native-stateless-form/blob/master/widgets/InlineTextInput.js
 */

type state = {
  scrollTo: number
}

class Input extends Component {
  props: TInput

  state: state = {
    scrollTo: 0
  }

  render () {
    const { style, inputStyle, refField, size = 'md', icon, ...props } = this.props
    const ComponentClass = TextInput
    return <View
      style={[s.wrapper, style]}
    >
      <ComponentClass
        underlineColorAndroid='transparent'
        textAlignVertical='top'
        autoCapitalize='none'
        placeholderTextColor={Colors.placeholderColor}
        autoCorrect={false}
        style={[s.input, icon ? s[`${size}InputIcon`] : {}, s[size], inputStyle]}
        {...props}
        ref={refField}
      />
      {icon && <Image
        source={icon}
        style={[s.icon, s[`${size}Icon`]]}
      />}
    </View>
  }
}

export default Input
