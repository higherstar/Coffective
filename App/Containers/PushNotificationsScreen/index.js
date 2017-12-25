import React from 'react'
import { Platform, View } from 'react-native'
import { Button, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'
import { setNotifications } from '../../Redux/UserRedux'
import { connect } from 'react-redux'

class PushNotificationsScreen extends React.Component {
  static navigationOptions = {}

  openSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen')
  }

  skip = () => {
    this.openSummaryScreen()
    this.props.setNotifications(false)
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
        <Button style={s.submitBtn} btnType='primary'>
          {I18n.t('enableNotifications')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.skip}>
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.User.notifications
})

const mapDispatchToProps = {
  setNotifications
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNotificationsScreen)
