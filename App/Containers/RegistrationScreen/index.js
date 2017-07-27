// @flow

import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/RegistrationRedux'
import { ScrollView } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, TextView, SafeDataInfo } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TRegistration } from './types'

const required = value => value ? undefined : 'Required'

class RegistrationScreen extends React.Component {
  render () {
    const {loading, navigation, valid}: TRegistration = this.props
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myName} textStyle={s.myNameText} textType='h1'>
          {I18n.t('myName')}
        </TextView>
        <Field
          style={s.firstName}
          inputStyle={s.firstNameInput}
          withRef
          name='firstName'
          placeholder={I18n.t('firstName')}
          component={Input}
          blurOnSubmit={false}
          validate={[ required ]}
        />
        <Field
          inputStyle={s.lastNameInput}
          withRef
          name='lastName'
          placeholder={I18n.t('lastName')}
          component={Input}
          blurOnSubmit={false}
          validate={[ required ]}
        />
        <TextView style={s.myZipCode} textStyle={s.myZipCodeText} textType='h1'>
          {I18n.t('myZipCode')}
        </TextView>
        <Field
          inputStyle={s.zipCodeInput}
          withRef
          name='zip'
          placeholder={I18n.t('zipCode')}
          component={Input}
          blurOnSubmit={false}
          validate={[ required ]}
        />
        <SafeDataInfo/>
        <Button
          style={s.letsGoBtn}
          onPress={() => navigation.navigate('PersonTypeScreen')}
          uppercase
          disabled={!valid}
        >
          {I18n.t('letsGo')}
        </Button>
        <Loader visible={loading}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Registration
})

const mapDispatchToProps = {
  onSubmit: register
}

// TODO https://github.com/react-community/react-navigation/issues/332
const RegistrationScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Registration'
})(RegistrationScreen))

RegistrationScreenWrapper.navigationOptions = {
}

export default RegistrationScreenWrapper
