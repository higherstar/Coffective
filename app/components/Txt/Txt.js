// @flow
import React from 'react'
import { Text } from 'react-native'
import type { TxtProps } from './TxtProps'
import s from './TxtStyles'
import { Fonts } from '../../themes'

class Txt extends React.Component<TxtProps, any> {
  static defaultProps = {
    type: 'regular',
    size: 'normal',
  }

  render () {
    const {children, size, type, weight, style} = this.props
    return (
      <Text style={[
        s.text,
        {fontFamily: Fonts.type[type]},
        {fontSize: Fonts.size[size]},
        weight && {fontWeight: weight},
        style,
      ]}>
        {children}
      </Text>
    )
  }
}

export default Txt
