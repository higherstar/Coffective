// @flow
import React from 'react'
import { View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt, Input } from '../../components'
import s from './NameStyles'
import { setName } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

class Name extends React.Component {
  static navigationOptions = {
    // TODO add Skip button
  }

  submit = () => {
    this.props.navigation.navigate('State')
  }

  render () {
    const {setName} = this.props
    return (
      <View style={s.container}>
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('nameHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('nameDescription')}
          </Txt.View>
          <Txt.View style={s.label} textStyle={s.labelText}>
            {I18n.t('whatIsYourName')}
          </Txt.View>
          <Input
            component={Input}
            style={s.name}
            focus
            name='name'
            placeholder={I18n.t('name')}
            returnKeyType='go'
            onSubmitEditing={this.submit}
            onChange={setName}
            blurOnSubmit
          />
        </View>
        <View style={s.actions}>
          <Button
            type='default'
            size='xl'
            style={s.submitBtn}
            onClick={this.submit}
            icon={
              <Icon
                style={s.submitIcon}
                name='arrow-right'
              />
            }
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  setName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)