// @flow

import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, TextView } from '../../Components'
import { Images } from '../../Themes'
import { login } from '../../Redux/LoginRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import { TLogin } from './types'

const Divider = ({style}) =>
  <TextView style={[s.divider, style]} textStyle={s.dividerText}>
    {I18n.t('or').toUpperCase()}
  </TextView>

const required = value => value ? undefined : 'Required'

class LoginScreen extends React.Component {

  email = null
  password = null

  openRegistrationScreen = () => {
    this.props.navigation.navigate('RegistrationScreen')
  }

  render () {
    const {handleSubmit, loading, valid}: TLogin = this.props
    return (
      <KeyboardAvoidingView
        behavior={'position'}
      >
        <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps='never'>
          <TextView style={s.header} textStyle={s.headerText} textType='h1'>
            {I18n.t('createAccount').toUpperCase()}
          </TextView>
          <TextView style={s.description} textStyle={s.descriptionText}>
            {I18n.t('createAccountDescription')}
          </TextView>
          <Button
            btnType='facebook'
            onPress={() => {}}
            icon={Images.facebook}
          >
            {I18n.t('signUpWithFacebook')}
          </Button>
          <Divider />
          <Button
            btnType='google'
            onPress={() => {}}
            icon={Images.googlePlus}
          >
            {I18n.t('signUpWithGoogle')}
          </Button>
          <Divider/>
          <Field
            ref={(componentRef) => this.email = componentRef}
            refField='email'
            style={s.email}
            inputStyle={s.emailInput}
            focus
            withRef
            name='email'
            placeholder={I18n.t('email')}
            component={Input}
            blurOnSubmit={false}
            keyboardType='email-address'
            icon={Images.email}
            validate={[required]}
            returnKeyType='next'
            onSubmitEditing={() => this.password.getRenderedComponent().refs.password.focus()}
          />
          <Field
            ref={(componentRef) => this.password = componentRef}
            refField='password'
            inputStyle={s.passwordInput}
            style={s.password}
            focus
            withRef
            name='password'
            returnKeyType='go'
            placeholder={I18n.t('password')}
            secureTextEntry
            component={Input}
            onSubmitEditing={handleSubmit(this.openRegistrationScreen)}
            icon={Images.pass}
            validate={[required]}
          />
          <View style={s.actions}>
            <Button
              style={s.loginBtn}
              onPress={handleSubmit}
              outline
              btnType='secondary'
              disabled={!valid}
            >
              {I18n.t('login')}
            </Button>
            <Button
              style={s.signUpBtn}
              onPress={this.openRegistrationScreen}
              btnType='primary'
              disabled={!valid}
            >
              {I18n.t('signUp')}
            </Button>
          </View>
          <Button
            onPress={() => {}}
            btnType='link'
            uppercase={false}
          >
            {I18n.t('termsAndConditions')}
          </Button>
          <Loader visible={loading}/>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Login
})

const mapDispatchToProps = {
  onSubmit: login
}

// TODO https://github.com/react-community/react-navigation/issues/332
const LoginScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Login'
})(LoginScreen))

LoginScreenWrapper.navigationOptions = {
  headerRight: <View/>
}

export default LoginScreenWrapper
