import React from 'react'
import { View } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'

class AskForFeedbackScreen extends React.Component {
  static navigationOptions = {}

  openPushNotificationsScreen = () => {
    this.props.navigation.navigate('PushNotificationsScreen')
  }

  render () {
    return (
      <View style={s.container}>
        <TextView style={s.askForFeedback} textStyle={s.askForFeedbackText} textType='h1'>
          {I18n.t('askForFeedback')}
        </TextView>
        <SafeDataInfo style={s.safeData} text={I18n.t('helpUsImproveApp')} />
        <View style={s.actions}>
          <Button style={s.cancelBtn} btnType='secondary' outline onPress={this.openPushNotificationsScreen}>
            {I18n.t('no')}
          </Button>
          <Button style={s.submitBtn} btnType='primary' onPress={this.openPushNotificationsScreen}>
            {I18n.t('yes')}
          </Button>
        </View>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.openPushNotificationsScreen}>
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

export default AskForFeedbackScreen
