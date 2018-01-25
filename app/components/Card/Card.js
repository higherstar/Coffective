// @flow
import React from 'react'
import { View } from 'react-native'
import {Txt} from '../'
import s from './CardStyles'

// TODO add Meta as here https://github.com/ant-design/ant-design/blob/master/components/card/index.tsx

class Card extends React.Component {
  static defaultProps = {
  }

  render () {
    const {title, children, style} = this.props
    return (
      <View style={[s.card, style]}>
        <Txt.View style={s.title} textStyle={s.titleText}>
          {title.toUpperCase()}
          </Txt.View>
        <View style={s.body}>
          {children}
        </View>
      </View>
    )
  }
}

export default Card
