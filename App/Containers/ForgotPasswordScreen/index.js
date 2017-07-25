import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { ButtonN, Input, Loader, TextView } from '../../Components'
import { forgotPassword } from '../../Redux/ForgotPasswordRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TForgotPassword } from './types'

class ForgotPasswordScreen extends React.Component {
  render () {
    const { handleSubmit, loading }: TForgotPassword = this.props
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <View style={s.form}>
          <TextView style={s.header} textStyle={s.headerText} textType='h1'>
            {I18n.t('forgotPassword')}
          </TextView>
          <TextView style={s.description} textStyle={s.descriptionText}>
            {I18n.t('forgotPasswordDescription')}
          </TextView>
          <Field
            style={s.emailInput}
            name='email'
            placeholder={I18n.t('email')}
            component={Input}
            onSubmit={handleSubmit}
            size='lg'
          />
        </View>
        <ButtonN
          style={s.submitBtn}
          onPress={handleSubmit}
          size='lg'
          uppercase
        >
          {I18n.t('submit')}
        </ButtonN>
        <Loader visible={loading} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.ForgotPassword
})

const mapDispatchToProps = {
  onSubmit: forgotPassword
}

// TODO https://github.com/react-community/react-navigation/issues/332
const ForgotPasswordScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ForgotPassword'
})(ForgotPasswordScreen))

ForgotPasswordScreenWrapper.navigationOptions = {
  title: 'Forgot Password',
}

export default ForgotPasswordScreenWrapper
