// @flow
import React from 'react'
import { View } from 'react-native'
import { Button, Carousel } from '../../components'
import I18n from 'react-native-i18n'
import s from './GuideStyles'
import { connect } from 'react-redux'
import { getCarousel } from '../../reducers/carousel'

class Guide extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentWillMount () {
    this.props.getCarousel()
  }

  render () {
    const {carousel} = this.props
    return (
      <View style={s.container}>
        <Carousel
          style={s.carousel}
        >
          {carousel.map((item, i) =>
            <Carousel.Item
              key={i}
              {...item}
            />
          )}
        </Carousel>
        <Button.Group style={s.actions}>
          <Button type='primary' style={s.signUpBtn}>
            {I18n.t('signUp')}
          </Button>
          <Button type='primary' style={s.loginBtn}>
            {I18n.t('login')}
          </Button>
        </Button.Group>
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
