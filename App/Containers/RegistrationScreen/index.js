// @flow

import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/RegistrationRedux'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TRegistration } from './types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const required = value => value ? undefined : 'Required'

class RegistrationScreen extends React.Component {

  firstName = null
  lastName = null
  zip = null

  render () {
    const {loading, navigation, valid, handleSubmit}: TRegistration = this.props
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myName} textStyle={s.myNameText} textType='h1'>
          {I18n.t('myName')}
        </TextView>
        <Field
          ref={(componentRef) => this.firstName = componentRef}
          refField='firstName'
          style={s.firstName}
          inputStyle={s.firstNameInput}
          focus
          withRef
          name='firstName'
          placeholder={I18n.t('firstName')}
          component={Input}
          blurOnSubmit={false}
          validate={[required]}
          returnKeyType='next'
          onSubmitEditing={() => this.lastName.getRenderedComponent().refs.lastName.focus()}
        />
        <Field
          ref={(componentRef) => this.lastName = componentRef}
          refField='lastName'
          inputStyle={s.lastNameInput}
          focus
          withRef
          name='lastName'
          placeholder={I18n.t('lastName')}
          component={Input}
          blurOnSubmit={false}
          validate={[required]}
          returnKeyType='next'
          onSubmitEditing={() => this.zip.getRenderedComponent().refs.zip.focus()}
        />
        <TextView style={s.myZipCode} textStyle={s.myZipCodeText} textType='h1'>
          {I18n.t('myZipCode')}
        </TextView>
        <Field
          ref={(componentRef) => this.zip = componentRef}
          refField='zip'
          inputStyle={s.zipCodeInput}
          focus
          withRef
          name='zip'
          placeholder={I18n.t('zipCode')}
          returnKeyType='go'
          secureTextEntry
          blurOnSubmit={false}
          component={Input}
          onSubmitEditing={() => navigation.navigate('PersonTypeScreen')}
          validate={[required]}
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
      </KeyboardAwareScrollView>
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

RegistrationScreenWrapper.navigationOptions = {}

export default RegistrationScreenWrapper
