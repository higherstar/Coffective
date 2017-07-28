// @flow

import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/RegistrationRedux'
import { getCity } from '../../Redux/UserRedux'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TRegistration } from './types'
import { ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const required = value => value ? undefined : 'Required'

class RegistrationScreen extends React.Component {

  firstName = null
  lastName = null
  zip = null

  openPersonTypeScreen = () => {
    this.props.navigation.navigate('PersonTypeScreen')
  }

  render () {
    const {loading, valid, handleSubmit, zipError}: TRegistration = this.props
    return (
      <KeyboardAwareScrollView>
        <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps='never'>
          <TextView style={s.myName} textStyle={s.myNameText} textType='h1'>
            {I18n.t('myName')}
          </TextView>
          <Field
            ref={(componentRef) => this.firstName = componentRef}
            refField='firstName'
            focus
            style={s.firstName}
            inputStyle={s.firstNameInput}
            withRef
            name='firstName'
            placeholder={I18n.t('firstName')}
            component={Input}
            blurOnSubmit={false}
            validate={[required]}
            returnKeyType='next'
            onSubmitEditing={() => {
              this.lastName.getRenderedComponent().refs.lastName.focus()
            }}
          />
          <Field
            ref={(componentRef) => this.lastName = componentRef}
            refField='lastName'
            inputStyle={s.lastNameInput}
            withRef
            focus
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
            inputStyle={zipError ? s.errorZipCodeInput : s.zipCodeInput }
            withRef
            focus
            name='zip'
            placeholder={I18n.t('zipCode')}
            returnKeyType='go'
            component={Input}
            blurOnSubmit
            onBlurField={this.props.getCity}
            validate={[required]}
          />
          {zipError && <TextView textStyle={s.zipError}>{zipError}</TextView>}
          <SafeDataInfo/>
          <Button
            style={s.letsGoBtn}
            onPress={handleSubmit(this.openPersonTypeScreen)}
            uppercase
            disabled={!valid}
          >
            {I18n.t('letsGo')}
          </Button>
          <Loader visible={loading}/>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Registration,
  zipError: state.User.zipError
})

const mapDispatchToProps = {
  onSubmit: register,
  getCity
}

// TODO https://github.com/react-community/react-navigation/issues/332
const RegistrationScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Registration'
})(RegistrationScreen))

RegistrationScreenWrapper.navigationOptions = {}

export default RegistrationScreenWrapper
