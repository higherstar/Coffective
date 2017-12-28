// @flow
import React from 'react'
import { Image, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt } from '../../components'
import s from './ExpectationStyles'
import { setExpectation } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'

class Expectation extends React.Component {
  static navigationOptions = {
    // TODO add Skip button
  }

  render () {
    const {setExpectation, navigation} = this.props
    return (
      <View style={s.container}>
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('expectationHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('expectationDescription')}
          </Txt.View>
          <View style={s.imageWrapper}>
            <Image source={Images.mother} style={s.image}/>
          </View>
        </View>
        <View style={s.footer}>
          <View style={s.picker}/>
          <View style={s.actions}>
            <Button
              type='default'
              size='xl'
              style={s.submitBtn}
              onClick={() => navigation.navigate('Register')}
              icon={
                <Icon
                  style={s.submitIcon}
                  name='arrow-right'
                />
              }
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  setExpectation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Expectation)
