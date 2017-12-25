// @flow
import React from 'react'
import { View } from 'react-native'
import s from './ButtonGroupStyles'
import type { ButtonGroupProps } from './ButtonGroupProps'

class ButtonGroup extends React.Component<ButtonGroupProps, any> {
  render () {
    const {style, children} = this.props
    return (
      <View style={[s.group, style]}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            style: [child.style, s.btn]
          })
        })}
      </View>
    )
  }
}

export default ButtonGroup
