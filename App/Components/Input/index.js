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

  handleLayout = (event: Object) => {
    this.setState({ scrollTo: event.nativeEvent.layout.y })
  }

  handleFocus = () => {
    const { onFocus } = this.props
    onFocus && onFocus(this.state.scrollTo)
  }

  handleSubmitEditing = () => {
    const { nextInput, onNextInputFocus } = this.props
    onNextInputFocus && onNextInputFocus(nextInput, this)
  }

  render () {
    const { style, inputStyle, input, nextInput, smartScroll = {}, size = 'md', icon, ...props } = this.props
    const ComponentClass = TextInput
    return <View
      style={[s.wrapper, style]}
      onLayout={this.handleLayout}
    >
      <ComponentClass
        {...input}
        ref='input'
        underlineColorAndroid='transparent'
        textAlignVertical='top'
        autoCapitalize='none'
        placeholderTextColor={Colors.placeholderColor}
        autoCorrect={false}
        returnKeyType={nextInput ? 'next' : 'done'}
        {...props}
        style={[s.input, icon ? s[`${size}InputIcon`] : {}, s[size], inputStyle]}
        onSubmitEditing={this.handleSubmitEditing}
        onFocus={this.handleFocus}
        smartScrollOptions={smartScroll}
      />
      {icon && <Image
        source={icon}
        style={[s.icon, s[`${size}Icon`]]}
      />}
    </View>
  }
}

export default Input
