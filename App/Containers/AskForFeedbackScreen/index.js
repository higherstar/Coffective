import React from 'react'
import { View } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'
import { setFeedback } from '../../Redux/UserRedux'
import { connect } from 'react-redux'

class AskForFeedbackScreen extends React.Component {
  static navigationOptions = {}

  openPushNotificationsScreen = () => {
    this.props.navigation.navigate('PushNotificationsScreen')
  }

  accept = () => {
    this.openPushNotificationsScreen()
    this.props.setFeedback(true)
  }

  skip = () => {
    this.openPushNotificationsScreen()
    this.props.setFeedback(false)
  }

  render () {
    return (
      <View style={s.container}>
        <TextView style={s.askForFeedback} textStyle={s.askForFeedbackText} textType='h1'>
          {I18n.t('askForFeedback')}
        </TextView>
        <SafeDataInfo style={s.safeData} text={I18n.t('helpUsImproveApp')} />
        <View style={s.actions}>
          <Button style={s.cancelBtn} btnType='secondary' outline onPress={this.skip}>
            {I18n.t('no')}
          </Button>
          <Button style={s.submitBtn} btnType='primary' onPress={this.accept}>
            {I18n.t('yes')}
          </Button>
        </View>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.skip}>
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  feedback: state.User.feedback
})

const mapDispatchToProps = {
  setFeedback
}

export default connect(mapStateToProps, mapDispatchToProps)(AskForFeedbackScreen)
