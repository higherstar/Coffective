// @flow
import React from 'react'
import { View, KeyboardAvoidingView, Image } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Txt, Input } from '../../components'
import { Images } from '../../themes'
import s from './LoginStyles'
import { login } from '../../reducers/login'

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <KeyboardAvoidingView contentContainerStyle={s.container} style={s.scrollContainer} behavior='padding'>
        <View style={s.content}>
          <Image source={Images.logo} style={s.logo}/>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('welcomeBack')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('signInToContinue')}
          </Txt.View>
          <Field
            component={Input}
            ref={(componentRef) => this.email = componentRef}
            refField='email'
            style={s.email}
            focus
            withRef
            name='email'
            placeholder={I18n.t('email')}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => this.password.refs.password.focus()}
          />
          <Field
            component={Input}
            ref={(componentRef) => this.password = componentRef}
            refField='password'
            style={s.password}
            focus
            withRef
            name='password'
            returnKeyType='go'
            placeholder={I18n.t('password')}
            secureTextEntry
            onSubmitEditing={handleSubmit}
            blurOnSubmit
          />
          <Button
            type='link'
            style={s.forgotPasswordBtn}
            onClick={() => this.props.navigation.navigate('ForgotPassword')}
          >
            {I18n.t('forgotPassword')}
          </Button>
          <Button
            type='primary'
            style={s.submitBtn}
            onClick={handleSubmit}
          >
            {I18n.t('getStarted')}
          </Button>
          <Txt.View>
            {I18n.t('newUser')}
          </Txt.View>
          <Button
            type='link'
            style={s.signUpBtn}
            onClick={() => this.props.navigation.navigate('Register')}
          >
            {I18n.t('signUp')}
          </Button>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.login,
})

const mapDispatchToProps = {
  onSubmit: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'login'
  })(Login)
)
