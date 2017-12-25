// @flow
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll'
import type { CarouselProps } from './CarouselProps'
import s from './CarouselStyles'

const Dots = ({index, slides, onChangeIndex}) =>
  <View style={s.dots}>
    {slides.map((x, i) =>
      <TouchableOpacity
        onPress={() => onChangeIndex(i)}
        key={i}
        style={[
          s.dot,
          index === i ? s.activeDot : {},
          i < slides.length - 1 ? s.notLastDot : {}
        ]}
      />
    )}
  </View>

class Carousel extends React.Component<CarouselProps, any> {
  state = {
    index: 0,
  }

  changeIndex = (index) => {
    this.setState({index})
  }

  render () {
    const {index} = this.state
    const {children} = this.props
    return (
      <View style={s.carousel}>
        <SwipeableViews
          slideStyle={s.item}
          index={index}
          onChangeIndex={this.changeIndex}
        >
          {children}
        </SwipeableViews>
        <Dots
          index={index}
          onChangeIndex={this.changeIndex}
          slides={children}
        />
      </View>
    )
  }
}

export default Carousel
