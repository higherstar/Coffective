// @flow

import React from 'react'
import { View, Keyboard, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { Button, Input, Loader, TextView } from '../../Components'
import { Images, Metrics } from '../../Themes'
import { handleChangeEmail, handleChangePassword, login, validate, validateEmail, getData } from '../../Redux/LoginRedux'
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
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  state = {
    visibleHeight: Metrics.screenHeight,
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  componentDidMount () {
    this.props.getData()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
    })
  }

  openRegistrationScreen = () => {
    this.props.navigation.navigate('RegistrationScreen')
  }

  handleSubmit = () => {
    if (this.props.valid) {
      dismissKeyboard()
      this.openRegistrationScreen()
    }
  }

  render () {
    const {loading, valid, emailError, email, password} = this.props
    return (
      <KeyboardAwareScrollView
        enableAutoAutomaticScroll
        enableResetScrollToCoords
        extraHeight={215}
        resetScrollToCoords={{ x: 0, y: 0 }}
        style={s.scrollContainer}
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={[s.container, { minHeight: this.state.visibleHeight - Metrics.navBarHeight }]}
        ref='scroll'
        enableOnAndroid
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
  getData,
}

// TODO https://github.com/react-community/react-navigation/issues/332
const LoginScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

LoginScreenWrapper.navigationOptions = {
  headerRight: <View/>
}

export default LoginScreenWrapper
