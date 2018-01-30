// @flow
import React from 'react'
import { View } from 'react-native'
import {Txt} from '../'
import s from './MetaStyles'

class Meta extends React.Component {
  render () {
    const {style, title, description, bordered} = this.props
    return (
      <View style={[s.meta, bordered && s.bordered, style]}>
        <Txt.View style={s.title} textStyle={s.titleText}>{title}</Txt.View>
        <Txt.View style={s.description} textStyle={s.descriptionText}>{description}</Txt.View>
      </View>
    )
  }
}

export default Meta
