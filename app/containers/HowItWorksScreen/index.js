// @flow

import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextView } from '../../components'
import I18n from 'react-native-i18n'
import s from './styles'
import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll'
import { Images } from '../../themes'
import { connect } from 'react-redux'
import { changeSlide } from '../../reducers/user'

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
      source={image}
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

  static navigationOptions = ({navigation}) => {
    return ({
      // TODO https://github.com/react-community/react-navigation/pull/1999
      headerLeft: <View/>,
      headerRight: <Button
        btnType='link'
        style={s.skipBtn}
        textStyle={s.skipBtnText}
        onPress={() => {
          navigation.navigate('LoginScreen')
          // TODO improve it
          setTimeout(() => {
            navigation.dispatch(changeSlide(0))
          }, 900)
        }}
        uppercase={false}
      >
        {I18n.t('skip')}
      </Button>
    })
  }

  state = {
    slides: [
      {
        title: I18n.t('howToInformation'),
        description: I18n.t('welcomeSlide1Desc'),
        nextBtnTitle: I18n.t('next'),
        image: Images.screen1,
      },
      {
        title: I18n.t('preparedChecklist'),
        description: I18n.t('welcomeSlide2Desc'),
        nextBtnTitle: I18n.t('next'),
        image: Images.screen2,
      },
      {
        title: I18n.t('buildYourTeam'),
        description: I18n.t('welcomeSlide3Desc'),
        nextBtnTitle: I18n.t('next'),
        image: Images.screen3,
      },
      {
        title: I18n.t('createAccount'),
        description: I18n.t('welcomeSlide4Desc'),
        nextBtnTitle: I18n.t('signUp'),
        image: Images.screen4,
        onPressNextBtn: () => {
          this.props.navigation.navigate('LoginScreen')
          // TODO improve it
          setTimeout(() => {
            this.props.changeSlide(0)
          }, 900)
        }
      }
    ]
  }

  render () {
    const {slides} = this.state
    const {slideIndex} = this.props
    return <View style={s.container}>
      <SwipeableViews
        index={slideIndex}
        onChangeIndex={this.props.changeSlide}
      >
        {slides.map((slide, i) =>
          <Slide
            key={i}
            {...slide}
            onPressNextBtn={() => slide.onPressNextBtn ? slide.onPressNextBtn() : this.props.changeSlide(i + 1)}
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

const mapStateToProps = state => ({
  slideIndex: state.user.slideIndex
})

const mapDispatchToProps = {
  changeSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
