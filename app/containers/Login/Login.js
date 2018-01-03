// @flow
import React from 'react'
import { View, KeyboardAvoidingView, Image } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Txt, Input } from '../../components'
import { Images, ApplicationStyles } from '../../themes'
import s from './LoginStyles'
import { login } from '../../reducers/login'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

class Login extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    headerRight: null,
    headerStyle: ApplicationStyles.transparentHeader,
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <KeyboardAvoidingView style={s.container} behavior='padding'>
        <View style={s.contentWrapper}>
          <View style={s.background}>
            <Image
              source={Images.loginBackground}
              style={s.backgroundImage}
            />
          </View>
          <View style={s.logoWrapper}>
            <Image source={Images.logo} style={s.logo}/>
          </View>
          <View style={s.content}>
            <Txt.View style={s.header} textStyle={s.headerText}>
              {I18n.t('welcomeBack')}
            </Txt.View>
            <Txt.View style={s.description} textStyle={s.descriptionText}>
              {I18n.t('signInToContinue')}
            </Txt.View>
            <Input.Group>
              <Field
                component={Input}
                ref={(componentRef) => this.email = componentRef}
                refField='email'
                style={s.email}
                prefix={
                  <Icon
                    style={s.emailIcon}
                    name='user'
                  />
                }
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
                prefix={
                  <Icon
                    style={s.passwordIcon}
                    name='lock'
                  />
                }
                focus
                withRef
                name='password'
                returnKeyType='go'
                placeholder={I18n.t('password')}
                secureTextEntry
                onSubmitEditing={handleSubmit}
                blurOnSubmit
              />
            </Input.Group>
            <Button
              type='link'
              uppercase={false}
              style={s.forgotPasswordBtn}
              textStyle={s.forgotPasswordBtnText}
              onClick={() => this.props.navigation.navigate('ForgotPassword')}
            >
              {I18n.t('forgotPassword')}
            </Button>
          </View>
          <View style={s.actions}>
            <Button
              type='default'
              size='xl'
              style={s.facebookBtn}
              onClick={() => {}}
              icon={
                <Icon
                  style={s.facebookIcon}
                  name='facebook'
                />
              }
            />
            <Button
              type='default'
              size='xl'
              style={s.submitBtn}
              onClick={handleSubmit}
              icon={
                <Icon
                  style={s.submitIcon}
                  name='arrow-right'
                />
              }
            />
          </View>
        </View>
        <View style={s.footerWrapper}>
          <View style={s.footer}>
            <Txt.View textStyle={s.newUserText}>
              {I18n.t('newUser')}
            </Txt.View>
            <Button
              type='link'
              style={s.signUpBtn}
              onClick={() => this.props.navigation.navigate('Name')}
            >
              {I18n.t('signUp')}
            </Button>
          </View>
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
