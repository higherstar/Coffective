// @flow
import React from 'react'
import { Image, KeyboardAvoidingView, View, ScrollView } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Txt } from '../../components'
import { Images } from '../../themes'
import s from './LoginStyles'
import { login } from '../../reducers/login'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Spinner from 'react-native-loading-spinner-overlay'

class Login extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    headerRight: null,
  }

  render () {
    const {handleSubmit, navigation, loading} = this.props
    return (
      <KeyboardAvoidingView style={s.container}>
        <View style={s.background}>
          <Image
            source={Images.loginBackground}
            style={s.backgroundImage}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent} keyboardShouldPersistTaps='handled'>
          <View style={s.logoWrapper}>
            <Image source={Images.logo} style={s.logo}/>
          </View>
          <View style={s.formWrapper}>
            <View style={s.form}>
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
                  withRef
                  name='email'
                  placeholder={I18n.t('emailOrPhone')}
                  keyboardType='email-address'
                  returnKeyType='next'
                  onSubmitEditing={() => this.password.getRenderedComponent().refs.password.focus()}
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
          </View>
        </ScrollView>
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
        <View style={s.footer}>
          <Txt.View textStyle={s.newUserText}>
            {I18n.t('newUser')}
          </Txt.View>
          <Button
            type='link'
            style={s.signUpBtn}
            onClick={() => navigation.navigate('PersonType')}
          >
            {I18n.t('signUp')}
          </Button>
        </View>
        <Spinner visible={loading}/>
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
    form: 'login',
  })(Login)
)
