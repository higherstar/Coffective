// @flow
import React from 'react'
import { View } from 'react-native'
import {Txt} from '../'
import s from './CardStyles'

class Card extends React.Component {
  static defaultProps = {
  }

  render () {
    const {title, titleStyle, children, style, cover, actions} = this.props
    return (
      <View style={[s.card, style]}>
        {cover && <View style={[s.cover, children && s.bordered]}>{cover}</View>}
        {typeof title === 'string' ? (
          <Txt.View style={[s.title, titleStyle]} textStyle={s.titleText}>
            {title.toUpperCase()}
          </Txt.View>
        ) : (
          title
        )}
        {children && (
          <View style={s.body}>
            {children}
            {actions && <View style={s.actions}>{actions}</View>}
          </View>
        )}
      </View>
    )
  }
}

export default Card
