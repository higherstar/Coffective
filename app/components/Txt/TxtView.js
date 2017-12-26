// @flow
import React from 'react'
import { View } from 'react-native'
import Txt from '../Txt'
import type { TxtViewProps } from './TxtViewProps'

class TxtView extends React.Component<TxtViewProps, any> {
  render () {
    const {children, style, textStyle, type, size, weight} = this.props
    return (
      <View style={style}>
        <Txt type={type} size={size} weight={weight} style={textStyle}>
          {children}
        </Txt>
      </View>
    )
  }
}

export default TxtView
