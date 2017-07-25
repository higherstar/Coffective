// @flow

import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { ButtonN, Input, Loader } from '../../Components'
import { login } from '../../Redux/LoginRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import { TLogin } from './types'

class LoginScreen extends React.Component {
  openRegistrationScreen = () => {
    this.props.navigation.navigate('RegistrationScreen')
  }

  openForgotPasswordScreen = () => {
    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  render () {
    const { handleSubmit, loading }: TLogin = this.props
    return (
      <Image style={s.backgroundImage} source={{uri: 'https://dummyimage.com/300x900'}}>
        <ScrollView
          style={s.scrollContainer}
          contentContainerStyle={s.container}
        >
          <Image style={s.logo} source={{uri: 'https://dummyimage.com/360x100'}}/>
          <View style={s.form}>
            <Field
              style={s.emailInput}
              withRef
              name='email'
              placeholder={I18n.t('email')}
              size='lg'
              component={Input}
              blurOnSubmit={false}
            />
            <Field
              style={s.passwordInput}
              withRef
              name='password'
              placeholder={I18n.t('password')}
              secureTextEntry
              size='lg'
              component={Input}
              onSubmit={handleSubmit}
            />
            <ButtonN
              style={s.loginBtn}
              onPress={handleSubmit}
              uppercase
              size='lg'
            >
              {I18n.t('login')}
            </ButtonN>
            <ButtonN
              style={s.forgotPasswordBtn}
              textStyle={s.forgotPasswordText}
              onPress={this.openForgotPasswordScreen}
              btnType='link'
            >
              {I18n.t('forgotPassword')}
            </ButtonN>
          </View>
          <ButtonN
            style={s.signUpBtn}
            onPress={this.openRegistrationScreen}
            uppercase
            btnType='white'
            outline
            size='lg'
          >
            {I18n.t('signUp')}
          </ButtonN>
          <Loader visible={loading}/>
        </ScrollView>
      </Image>
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
  title: 'Login',
}

export default LoginScreenWrapper
