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
      <View style={s.carouselWrapper}>
        <SwipeableViews
          style={s.carousel}
          slideStyle={s.item}
          index={index}
          onChangeIndex={this.changeIndex}
        >
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              ...child.props,
              key: i,
              style: [child.props.style, i !== index && s.notActive],
            }),
          )}
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
