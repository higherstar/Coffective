// @flow
import React from 'react'
import { View } from 'react-native'
import Txt from '../Txt'
import type { TxtViewProps } from './TxtViewProps'

class TxtView extends React.Component<TxtViewProps, any> {
  render () {
    const {children, style, textStyle, type, size, weight, ...props} = this.props
    return (
      <View style={style}>
        <Txt {...props} type={type} size={size} weight={weight} style={textStyle}>
          {children}
        </Txt>
      </View>
    )
  }
}

export default TxtView
