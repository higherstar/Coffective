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
        {React.Children.map(children, (child, i) => {
          return [
            i > 0 ? <View key={`divider${i}`} style={s.divider}/> : null,
            React.cloneElement(child, {
              ...child.props,
              key: i,
              style: [child.props.style, s.item],
            }),
          ]
        })}
      </View>
    )
  }
}

export default ButtonGroup
