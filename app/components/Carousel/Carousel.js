// @flow
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll'
import type { CarouselProps } from './CarouselProps'
import s from './CarouselStyles'

const Dots = ({index, slides, onChangeIndex, style, dotStyle, activeDotStyle}) =>
  <View style={[s.dots, style]}>
    {slides.map((x, i) =>
      <TouchableOpacity
        onPress={() => onChangeIndex(i)}
        key={i}
        style={[
          s.dot,
          dotStyle,
          index === i ? s.activeDot : {},
          index === i ? activeDotStyle : {},
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
    const {children, style, itemStyle, dotsStyle, dotStyle, activeDotStyle} = this.props
    return (
      <View style={[s.carouselWrapper, style]}>
        <SwipeableViews
          style={s.carousel}
          slideStyle={[s.item, itemStyle]}
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
          style={dotsStyle}
          dotStyle={dotStyle}
          activeDotStyle={activeDotStyle}
          index={index}
          onChangeIndex={this.changeIndex}
          slides={children}
        />
      </View>
    )
  }
}

export default Carousel
