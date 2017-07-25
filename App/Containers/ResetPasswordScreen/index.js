import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { ButtonN, Input, Loader, TextView } from '../../Components'
import { resetPassword } from '../../Redux/ResetPasswordRedux'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TResetPassword } from './types'

class ResetPasswordScreen extends React.Component {
  render () {
    const { handleSubmit, loading }: TResetPassword = this.props
    return (
      <View style={s.container}>
        <TextView style={s.header} textStyle={s.headerText} textType='h1'>
          {I18n.t('resetYourPassword')}
        </TextView>
        <TextView style={s.description} textStyle={s.descriptionText}>
          {I18n.t('resetPasswordDescription')}
        </TextView>
        <Field
          style={s.password}
          name='password'
          placeholder={I18n.t('newPassword')}
          component={Input}
          blurOnSubmit={false}
          size='lg'
        />
        <Field
          style={s.verifyPassword}
          name='password-confirm'
          placeholder={I18n.t('verifyNewPassword')}
          component={Input}
          onSubmit={handleSubmit}
          size='lg'
        />
        <ButtonN
          style={s.resetPasswordBtn}
          onPress={handleSubmit}
          uppercase
        >
          {I18n.t('resetPassword')}
        </ButtonN>
        <Loader visible={loading} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.ResetPassword
})

const mapDispatchToProps = {
  onSubmit: resetPassword
}

// TODO https://github.com/react-community/react-navigation/issues/332
const ResetPasswordScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ResetPassword'
})(ResetPasswordScreen))

ResetPasswordScreenWrapper.navigationOptions = {
  title: 'Reset Password',
}

export default ResetPasswordScreenWrapper
