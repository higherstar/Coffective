// @flow
import React from 'react'
import { View } from 'react-native'
import s from './InputGroupStyles'

class InputGroup extends React.Component {
  static defaultProps = {
    bordered: true,
  }

  render () {
    const {style, children, bordered} = this.props
    return (
      <View style={[s.group, bordered && s.bordered, style]}>
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child, {
            ...child.props,
            key: i,
            style: [child.props.style, i > 0 && s.notFirst, s.item],
          })
        )}
      </View>
    )
  }
}

export default InputGroup
