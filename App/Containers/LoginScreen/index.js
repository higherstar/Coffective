// @flow

import React from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, TextView } from '../../Components'
import { login } from '../../Redux/LoginRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import { TLogin } from './types'

const Divider = ({style}) =>
  <TextView style={[s.divider, style]} textStyle={s.dividerText}>
    {I18n.t('or').toUpperCase()}
  </TextView>

class LoginScreen extends React.Component {
  openRegistrationScreen = () => {
    this.props.navigation.navigate('RegistrationScreen')
  }

  openForgotPasswordScreen = () => {
    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  render () {
    const {handleSubmit, loading}: TLogin = this.props
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.header} textStyle={s.headerText} textType='h1'>
          {I18n.t('createAccount').toUpperCase()}
        </TextView>
        <TextView style={s.description} textStyle={s.descriptionText}>
          {I18n.t('createAccountDescription')}
        </TextView>
        <Button
          btnType='facebook'
          onPress={() => {}}
        >
          {I18n.t('signUpWithFacebook')}
        </Button>
        <Divider />
        <Button
          btnType='google'
          onPress={() => {}}
        >
          {I18n.t('signUpWithGoogle')}
        </Button>
        <Divider style={s.orDivider}/>
        <Field
          style={s.email}
          inputStyle={s.emailInput}
          withRef
          name='email'
          placeholder={I18n.t('email')}
          size='lg'
          component={Input}
          blurOnSubmit={false}
        />
        <Field
          inputStyle={s.passwordInput}
          style={s.password}
          withRef
          name='password'
          placeholder={I18n.t('password')}
          secureTextEntry
          size='lg'
          component={Input}
          onSubmit={handleSubmit}
        />
        <View style={s.actions}>
          <Button
            style={s.loginBtn}
            onPress={handleSubmit}
            outline
            btnType='secondary'
          >
            {I18n.t('login')}
          </Button>
          <Button
            style={s.signUpBtn}
            onPress={this.openRegistrationScreen}
            btnType='primary'
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
  headerRight: null
}

export default LoginScreenWrapper
