import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import I18n from 'react-native-i18n'
import { TextView, ButtonN, Input } from '../../Components'
import s from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const LinkRow = ({ label, value, btnLabel, onPress }) =>
  <View style={s.row}>
    <TextView style={s.label} textStyle={s.labelText}>
      {label}
    </TextView>
    <View style={s.valueWrapper}>
      <TextView style={s.value} textStyle={s.valueText}>
        {value}
      </TextView>
      <ButtonN style={s.button} size='sm' onPress={onPress}>
        {btnLabel}
      </ButtonN>
    </View>
  </View>

class InputRow extends React.Component {
  state = {
    editable: false
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable })
  }

  render () {
    const { editable } = this.state
    const { label, value, btnLabel } = this.props
    return (
      <View style={s.row}>
        <TextView style={s.label} textStyle={s.labelText}>
          {label}
        </TextView>
        <View style={editable ? s.valueWrapperEditable : s.valueWrapper}>
          {editable ? (
            <Input
              value={value}
              style={s.valueEditable}
            />
          ) : (
            <TextView style={s.value} textStyle={s.valueText}>
              {value}
            </TextView>
          )}
          <ButtonN style={s.button} size='sm' onPress={this.toggleEditable}>
            {editable ? 'save' : btnLabel}
          </ButtonN>
        </View>
      </View>
    )
  }
}


class ProfileScreen extends React.Component {
  openPersonTypeScreen = () => {
    this.props.navigation.navigate('PersonTypeScreen')
  }

  openResetPasswordScreen = () => {
    this.props.navigation.navigate('ResetPasswordScreen')
  }

  openSetZipScreen = () => {
    this.props.navigation.navigate('SetZipScreen')
  }

  render () {
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <View style={s.header}>
          <Icon
            name='person'
            style={s.avatar}
          />
          <TextView style={s.name} textType='h2'>
            John Doe
          </TextView>
        </View>
        <LinkRow
          label='Role'
          value='Pregnant Woman'
          btnLabel='edit'
          onPress={this.openPersonTypeScreen}
        />
        <InputRow
          label='Username'
          value='johndoe'
          btnLabel='edit'
        />
        <InputRow
          label='Email'
          value='email@example.com'
          btnLabel='edit'
        />
        <LinkRow
          label='Password'
          value='********'
          btnLabel='reset'
          onPress={this.openResetPasswordScreen}
        />
        <LinkRow
          label='ZIP'
          value='12345'
          btnLabel='change'
          onPress={this.openSetZipScreen}
        />
      </ScrollView>
    )
  }
}

export default ProfileScreen
