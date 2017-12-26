// @flow
import React from 'react'
import { View, Image } from 'react-native'
import {Txt} from '../'
import type { CarouselItemProps } from './CarouselItemProps'
import s from './CarouselItemStyles'


class CarouselItem extends React.Component<CarouselItemProps, any> {
  render () {
    const {style, image, header, subHeader, description} = this.props
    return (
      <View style={[s.item, style]}>
        <Image
          style={s.image}
          source={{uri: image}}
        />
        <View style={s.content}>
          <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>
            {subHeader.toUpperCase()}
          </Txt.View>
          <Txt.View type='h2' style={s.header} textStyle={s.headerText}>
            {header}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {description}
          </Txt.View>
        </View>
      </View>
    )
  }
}

export default CarouselItem
