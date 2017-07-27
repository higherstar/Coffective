import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'

const SummaryRow = ({ label, value }) =>
  <View style={s.row}>
    <TextView style={s.label} textStyle={s.labelText} textType='h5'>
      {label}:
    </TextView>
    <TextView style={s.value} textStyle={s.valueText} textType='h5'>
      {value}
    </TextView>
  </View>

class SummaryScreen extends React.Component {
  static navigationOptions = {}

  openPushNotificationsScreen = () => {
    this.props.navigation.navigate('PushNotificationsScreen')
  }

  render () {
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.summaryTitle} textStyle={s.summaryTitleText} textType='h6'>
          {I18n.t('summary')}
        </TextView>
        <View style={s.rows}>
          <SummaryRow label={I18n.t('summaryFirstName')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryLastName')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryEmail')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryRole')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryAgeRange')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryZipCode')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryExpectedDue')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryRace')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryNotifications')} value={'a'}/>
          <SummaryRow label={I18n.t('summaryFeedback')} value={'a'}/>
        </View>
        <Button style={s.restartBtn} btnType='primary' onPress={() => {}}>
          {I18n.t('restart')}
        </Button>
      </ScrollView>
    )
  }
}

export default SummaryScreen
