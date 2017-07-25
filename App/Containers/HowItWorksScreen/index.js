// @flow

import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import SwipeableViews from 'react-swipeable-views-native'

type TSlide = {
  image: number,
  title: string,
  description: string,
  nextBtnTitle: string,
  onPressNextBtn: Function,
}

type TDots = {
  active: number,
  slides: Object[]
}

const Slide = ({image, title, description, nextBtnTitle, onPressNextBtn}: TSlide) =>
  <View style={s.slide}>
    <Image
      style={s.image}
      source={{uri: 'https://dummyimage.com/240x240'}}
    />
    <View style={s.slideBody}>
      <TextView textType='h3' style={s.titleWrapper} textStyle={s.title}>
        {title.toUpperCase()}
      </TextView>
      <TextView style={s.descriptionWrapper} textStyle={s.description}>
        {description}
      </TextView>
      <Button style={s.slideBtn} btnType='secondary' outline onPress={onPressNextBtn}>
        {nextBtnTitle}
      </Button>
    </View>
  </View>

const Dots = ({active, slides}: TDots) =>
  <View style={s.dots}>
    {slides.map((x, i) =>
      <View
        key={i}
        style={[
          s.dot,
          active === i ? s.activeDot : {},
          i < slides.length - 1 ? s.notLastDot : {}
        ]}
      />
    )}
  </View>

class HowItWorks extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: <Button
      btnType='link'
      style={s.skipBtn}
      textStyle={s.skipBtnText}
      onPress={() => navigation.navigate('RegistrationScreen')}
      uppercase={false}
    >
      {I18n.t('skip')}
    </Button>
  })

  state = {
    slideIndex: 0,
    slides: [
      {
        title: I18n.t('howToInformation'),
        description: I18n.t('welcomeSlide1Desc'),
        nextBtnTitle: I18n.t('next'),
      },
      {
        title: I18n.t('preparedChecklist'),
        description: I18n.t('welcomeSlide2Desc'),
        nextBtnTitle: I18n.t('next'),
      },
      {
        title: I18n.t('buildYourTeam'),
        description: I18n.t('welcomeSlide3Desc'),
        nextBtnTitle: I18n.t('next'),
      },
      {
        title: I18n.t('createAccount'),
        description: I18n.t('welcomeSlide4Desc'),
        nextBtnTitle: I18n.t('signUp'),
        onPressNextBtn: () => this.props.navigation.navigate('RegistrationScreen')
      }
    ]
  }

  onSlideChange = (slideIndex: number) => {
    this.setState({slideIndex})
  }

  render () {
    const {slideIndex, slides} = this.state
    return <View style={s.container}>
      <SwipeableViews
        index={slideIndex}
        onChangeIndex={this.onSlideChange}
      >
        {slides.map((slide, i) =>
          <Slide
            key={i}
            {...slide}
            onPressNextBtn={() => slide.onPressNextBtn ? slide.onPressNextBtn() : this.onSlideChange(i + 1)}
          />
        )}
      </SwipeableViews>
      <View style={s.footer}>
        <Dots
          active={slideIndex}
          slides={slides}
        />
        {this.props.children || null}
      </View>
    </View>
  }
}

export default HowItWorks
