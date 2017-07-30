// @flow

import React from 'react'
import { connect } from 'react-redux'
import {
  getCity,
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeZip,
  validate,
  validateZip
} from '../../Redux/RegistrationRedux'
import { Button, Input, Loader, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import type { TRegistration } from './types'
import { ScrollView, Keyboard, LayoutAnimation, KeyboardAvoidingView, Platform } from 'react-native'

class RegistrationScreen extends React.Component {

  firstName = null
  lastName = null
  zip = null

  state = {
    keyboardHeight: 0
  }

  openPersonTypeScreen = () => {
    this.props.navigation.navigate('PersonTypeScreen')
  }

  handleSubmit = () => {
    if (this.props.valid) {
      this.openPersonTypeScreen()
    }
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

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      keyboardHeight: e.endCoordinates.height
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      keyboardHeight: 0
    })
  }

  render () {
    const {loading, valid, firstName, lastName, zip, zipError}: TRegistration = this.props
    return (
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={Platform.select({ios: 0, android: 25})}
      >
        <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps='handled' ref='scroll'>
          <TextView style={s.myName} textStyle={s.myNameText} textType='h1'>
            {I18n.t('myName')}
          </TextView>
          <Input
            value={firstName}
            ref={(componentRef) => this.firstName = componentRef}
            refField='firstName'
            focus
            style={s.firstName}
            inputStyle={s.firstNameInput}
            withRef
            name='firstName'
            placeholder={I18n.t('firstName')}
            returnKeyType='next'
            onChangeText={this.props.handleChangeFirstName}
            onSubmitEditing={() => this.lastName.refs.lastName.focus()}
            onBlur={this.props.validate}
          />
          <Input
            value={lastName}
            ref={(componentRef) => this.lastName = componentRef}
            refField='lastName'
            inputStyle={s.lastNameInput}
            withRef
            focus
            name='lastName'
            placeholder={I18n.t('lastName')}
            returnKeyType='next'
            onChangeText={this.props.handleChangeLastName}
            onSubmitEditing={() => this.zip.refs.zip.focus()}
            onBlur={this.props.validate}
          />
          <TextView style={s.myZipCode} textStyle={s.myZipCodeText} textType='h1'>
            {I18n.t('myZipCode')}
          </TextView>
          <Input
            value={zip}
            ref={(componentRef) => this.zip = componentRef}
            refField='zip'
            inputStyle={zipError ? s.errorZipCodeInput : s.zipCodeInput }
            withRef
            focus
            name='zip'
            placeholder={I18n.t('zipCode')}
            returnKeyType='go'
            onChangeText={this.props.handleChangeZip}
            onFocus={() => {
              this.refs.scroll.scrollTo({ y: this.state.keyboardHeight })
            }}
            onBlur={() => {
              this.props.validate()
              this.props.validateZip()
              this.refs.scroll.scrollTo({ y: 0 })
            }}
            onSubmitEditing={() => this.handleSubmit()}
          />
          {zipError && <TextView textStyle={s.zipError}>Invalid zip code</TextView>}
          <SafeDataInfo/>
          <Button
            style={s.letsGoBtn}
            onPress={this.handleSubmit}
            uppercase
            disabled={!valid}
          >
            {I18n.t('letsGo')}
          </Button>
          <Loader visible={loading}/>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Registration,
})

const mapDispatchToProps = {
  getCity,
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeZip,
  validate,
  validateZip,
}

// TODO https://github.com/react-community/react-navigation/issues/332
const RegistrationScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen)

RegistrationScreenWrapper.navigationOptions = {}

export default RegistrationScreenWrapper
