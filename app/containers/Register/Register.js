// @flow
import React from 'react'
import { View, KeyboardAvoidingView, Image } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Txt, Input } from '../../components'
import s from './RegisterStyles'
import { register } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {Images} from '../../themes'

class Register extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <KeyboardAvoidingView style={s.container} behavior='padding'>
        <Image
          style={s.backgroundImage}
          source={Images.registerBackground}
        />
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('registerHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('registerDescription')}
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
              focus
              withRef
              name='password'
              returnKeyType='go'
              placeholder={I18n.t('choosePassword')}
              secureTextEntry
              onSubmitEditing={() => this.verifyPassword.getRenderedComponent().refs.verifyPassword.focus()}
            />
            <Field
              component={Input}
              ref={(componentRef) => this.verifyPassword = componentRef}
              refField='verifyPassword'
              style={s.password}
              prefix={
                <Icon
                  style={s.passwordIcon}
                  name='lock'
                />
              }
              focus
              withRef
              name='verifyPassword'
              returnKeyType='next'
              placeholder={I18n.t('verifyPassword')}
              secureTextEntry
              onSubmitEditing={handleSubmit}
              blurOnSubmit
            />
          </Input.Group>
        </View>
        <View style={s.actions}>
          <Button
            type='default'
            size='xl'
            style={s.facebookBtn}
            textStyle={s.facebookBtnText}
            onClick={() => {}}
            icon={
              <Icon
                style={s.facebookIcon}
                name='facebook'
              />
            }
          >
            {I18n.t('signUpWithFacebook')}
          </Button>
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
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  onSubmit: register,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'register'
  })(Register)
)
