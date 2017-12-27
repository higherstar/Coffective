// @flow
import React from 'react'
import { View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Txt, Input } from '../../components'
import s from './ForgotPasswordStyles'
import { forgotPassword } from '../../reducers/forgotPassword'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

class ForgotPassword extends React.Component {
  static navigationOptions = {
    headerRight: null,
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <View style={s.container}>
        <Txt.View style={s.header} textStyle={s.headerText}>
          {I18n.t('forgotPasswordHeader')}
        </Txt.View>
        <Txt.View style={s.description} textStyle={s.descriptionText}>
          {I18n.t('forgotPasswordDescription')}
        </Txt.View>
        <Field
          component={Input}
          style={s.email}
          focus
          name='email'
          prefix={
            <Icon
              style={s.emailIcon}
              name='envelope'
            />
          }
          suffix={
            <Button
              type='link'
              style={s.submitBtn}
              onClick={handleSubmit}
            >
              {I18n.t('submit')}
            </Button>
          }
          placeholder={I18n.t('forgotPasswordEmail')}
          keyboardType='email-address'
          returnKeyType='go'
          onSubmitEditing={handleSubmit}
          blurOnSubmit
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.forgotPassword,
})

const mapDispatchToProps = {
  onSubmit: forgotPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'forgotPassword'
  })(ForgotPassword)
)
