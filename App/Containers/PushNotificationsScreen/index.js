import React from 'react'
import { Platform, View } from 'react-native'
import { Button, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'
import NotificationsIOS from 'react-native-notifications'

class PushNotificationsScreen extends React.Component {
  static navigationOptions = {}

  requestPermissionsForNotifications () {
    if (Platform.OS === 'ios') {
      NotificationsIOS.requestPermissions()
    }
  }

  render () {
    return (
      <View style={s.container}>
        <TextView style={s.title} textStyle={s.titleText} textType='h1'>
          {I18n.t('pushNotifications')}
        </TextView>
        <TextView style={s.description} textStyle={s.descriptionText}>
          {I18n.t('pushNotificationsDescription')}
        </TextView>
        <Button style={s.submitBtn} btnType='primary' onPress={this.requestPermissionsForNotifications}>
          {I18n.t('enableNotifications')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={() => {}}>
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

export default PushNotificationsScreen
