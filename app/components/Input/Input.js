// @flow
import React from 'react'
import { View, TextInput, Image } from 'react-native'
import { Colors } from '../../themes'
import s from './InputStyles'

class Input extends React.Component {
  state = {
    scrollTo: 0
  }

  render () {
    const { style, inputStyle, refField, size = 'md', icon, ...props } = this.props
    const ComponentProp = TextInput
    return <View
      style={[s.wrapper, style]}
    >
      <ComponentProp
        underlineColorAndroid='transparent'
        textAlignVertical='top'
        autoCapitalize='none'
        placeholderTextColor={Colors.placeholderColor}
        autoCorrect={false}
        style={[s.input, icon ? s[`${size}InputIcon`] : {}, s[size], inputStyle]}
        {...props}
        ref={refField}
      />
      {/*{icon && <Image*/}
        {/*source={icon}*/}
        {/*style={[s.icon, s[`${size}Icon`]]}*/}
      {/*/>}*/}
    </View>
  }
}

export default Input
