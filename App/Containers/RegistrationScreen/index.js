// @flow

import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/RegistrationRedux'
import { ScrollView } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Loader, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import CheckBox from 'react-native-check-box'
import Icon from 'react-native-vector-icons/MaterialIcons'
import s from './styles'
import type { TRegistration } from './types'

class RegistrationScreen extends React.Component {
  render () {
    const {handleSubmit, loading}: TRegistration = this.props
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.header} textStyle={s.headerText} textType='h1'>
          {I18n.t('pleaseCreateAccount')}
        </TextView>
        <TextView style={s.description} textStyle={s.descriptionText}>
          {I18n.t('createAccountDescription')}
        </TextView>
        <Field
          style={s.input}
          withRef
          name='firstName'
          placeholder={I18n.t('firstName')}
          component={Input}
          blurOnSubmit={false}
          size='lg'
        />
        <Field
          style={s.input}
          withRef
          name='lastName'
          placeholder={I18n.t('lastName')}
          component={Input}
          blurOnSubmit={false}
          size='lg'
        />
        <Field
          style={s.input}
          withRef
          name='username'
          placeholder={I18n.t('username')}
          component={Input}
          blurOnSubmit={false}
          size='lg'
        />
        <Field
          style={s.input}
          withRef
          name='email'
          placeholder={I18n.t('email')}
          component={Input}
          blurOnSubmit={false}
          size='lg'
        />
        <Field
          style={s.input}
          withRef
          name='password'
          placeholder={I18n.t('password')}
          secureTextEntry
          component={Input}
          onSubmit={handleSubmit}
          size='lg'
        />
        <CheckBox
          checkedImage={<Icon name='check-box' style={s.checkedIcon}/>}
          unCheckedImage={<Icon name='check-box-outline-blank' style={s.uncheckedIcon}/>}
          style={s.sendUpdates}
          onClick={() => {}}
          isChecked={false}
          rightText={I18n.t('pleaseSendUpdates')}
          rightTextStyle={s.sendUpdatesText}
        />
        <Button
          style={s.termsAndConditionsBtn}
          onPress={() => {}}
          btnType='link'
          size='lg'
        >
          {I18n.t('viewTermsAndConditions')}
        </Button>
        <Button
          style={s.createAccountBtn}
          onPress={handleSubmit}
          size='lg'
          uppercase
        >
          {I18n.t('createMyAccount')}
        </Button>
        <Loader visible={loading}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Registration
})

const mapDispatchToProps = {
  onSubmit: register
}

// TODO https://github.com/react-community/react-navigation/issues/332
const RegistrationScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Registration'
})(RegistrationScreen))

RegistrationScreenWrapper.navigationOptions = {
  title: 'Create my account',
}

export default RegistrationScreenWrapper
