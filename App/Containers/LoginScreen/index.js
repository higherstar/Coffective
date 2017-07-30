// @flow

import React from 'react'
import { Keyboard, LayoutAnimation, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, Input, Loader, TextView } from '../../Components'
import { Images } from '../../Themes'
import { handleChangeEmail, handleChangePassword, login, validate, validateEmail } from '../../Redux/LoginRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Divider = ({style}) =>
  <TextView style={[s.divider, style]} textStyle={s.dividerText}>
    {I18n.t('or').toUpperCase()}
  </TextView>

class LoginScreen extends React.Component {

  email = null
  password = null

  openRegistrationScreen = () => {
    this.props.navigation.navigate('RegistrationScreen')
  }

  handleSubmit = () => {
    if (this.props.valid) {
      dismissKeyboard()
      this.openRegistrationScreen()
    }
  }

  textInputOnFocus = () => {
  }

  render () {
    const {loading, valid, emailError, email, password} = this.props
    return (
      <KeyboardAwareScrollView
        enableAutoAutomaticScroll={true}
        enableResetScrollToCoords={true}
        extraHeight={200}
        style={s.scrollContainer}
        contentContainerStyle={s.container}
        keyboardShouldPersistTaps='handled'
        ref='scroll'
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
        <Input
          value={email}
          ref={(componentRef) => this.email = componentRef}
          refField='email'
          style={s.email}
          inputStyle={emailError ? s.emailErrorInput : s.emailInput}
          focus
          withRef
          name='email'
          placeholder={I18n.t('email')}
          keyboardType='email-address'
          icon={Images.email}
          returnKeyType='next'
          onSubmitEditing={() => this.password.refs.password.focus()}
          onChangeText={this.props.handleChangeEmail}
          onBlur={() => {
            this.props.validate()
            this.props.validateEmail()
          }}
          onFocus={() => {
            this.textInputOnFocus()
          }}
        />
        {emailError && <TextView style={s.error} textStyle={s.errorText}>Invalid email address</TextView>}
        <Input
          value={password}
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
          onSubmitEditing={() => this.handleSubmit()}
          icon={Images.pass}
          onChangeText={this.props.handleChangePassword}
          onBlur={() => {
            this.props.validate()
          }}
          blurOnSubmit
          onFocus={() => {
            this.textInputOnFocus()
          }}
        />
        <View style={s.actions}>
          <Button
            style={s.loginBtn}
            onPress={this.props.login}
            outline
            btnType='secondary'
            disabled={!valid}
          >
            {I18n.t('login')}
          </Button>
          <Button
            style={s.signUpBtn}
            onPress={() => this.handleSubmit()}
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
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Login
})

const mapDispatchToProps = {
  login,
  validate,
  validateEmail,
  handleChangeEmail,
  handleChangePassword,
}

// TODO https://github.com/react-community/react-navigation/issues/332
const LoginScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

LoginScreenWrapper.navigationOptions = {
  headerRight: <View/>
}

export default LoginScreenWrapper
