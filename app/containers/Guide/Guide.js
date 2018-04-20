// @flow
import React from 'react'
import { View, Image } from 'react-native'
import { Button, Carousel, Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './GuideStyles'
import { connect } from 'react-redux'
import { getCarousel } from '../../reducers/carousel'
import {Images} from '../../themes'
import Spinner from 'react-native-loading-spinner-overlay'

class Guide extends React.Component {
  static navigationOptions = {
    header: null,
    headerLeft: null,
    headerRight: null,
    drawerLockMode: 'locked-closed',
  }

  componentDidMount () {
    this.props.getCarousel()
  }

  render () {
    const {carousel, loading} = this.props
    return (
      <View style={s.container}>
        <Image
          source={Images.guideBackground}
          style={s.backgroundImage}
        />
        <Carousel
          style={s.carousel}
          itemStyle={s.itemWrapper}
          dotsStyle={s.dots}
        >
          {carousel.map((item, i) =>
            <View key={i} style={s.item}>
              <Image
                style={s.image}
                source={{uri: item.banner_image}}
              />
              <View style={s.content}>
                <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>
                  {item.acf.top_title.toUpperCase()}
                </Txt.View>
                <Txt.View type='light' size='h1' style={s.header} textStyle={s.headerText}>
                  {item.title.rendered}
                </Txt.View>
                <Txt.View type='mediumText' size='medium' style={s.description} textStyle={s.descriptionText}>
                  {item.acf.description}
                </Txt.View>
              </View>
            </View>
          )}
        </Carousel>
        <Button.Group style={s.actions}>
          <Button
            type='primary'
            style={s.signUpBtn}
            size='lg'
            onClick={() => this.props.navigation.navigate('PersonType')}
          >
            {I18n.t('signUp')}
          </Button>
          <Button
            type='primary'
            style={s.loginBtn}
            size='lg'
            onClick={() => this.props.navigation.navigate('Login')}
          >
            {I18n.t('login')}
          </Button>
        </Button.Group>
        <Spinner visible={loading && !carousel.length}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.carousel,
})

const mapDispatchToProps = {
  getCarousel,
}

export default connect(mapStateToProps, mapDispatchToProps)(Guide)
