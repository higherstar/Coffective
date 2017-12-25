// @flow
import React from 'react'
import { Text } from 'react-native'
import type { TxtProps } from './TxtProps'
import s from './TxtStyles'

class Txt extends React.Component<TxtProps, any> {
  static defaultProps = {
    type: 'normal',
  }

  render () {
    const {children, type, style} = this.props
    return (
      <Text style={[s.text, type && s[type], style]}>
        {children}
      </Text>
    )
  }
}

export default Txt
