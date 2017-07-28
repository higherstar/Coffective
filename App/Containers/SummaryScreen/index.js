import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import { Button, TextView } from '../../Components'
import s from './styles'
import I18n from 'react-native-i18n'
import { clearUserData } from '../../Redux/UserRedux'

const SummaryRow = ({label, value}) =>
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

  openFirstScreen = () => {
    this.props.navigation.navigate('HowItWorksScreen')
  }

  restart = () => {
    this.props.clearUserData()
    this.openFirstScreen()
  }

  render () {
    const {
      firstName,
      lastName,
      email,
      zip,
      personType,
      ageRange,
      dueDate,
      ethnicity,
      notifications,
      feedback,
    } = this.props

    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.summaryTitle} textStyle={s.summaryTitleText} textType='h6'>
          {I18n.t('summary')}
        </TextView>
        <View style={s.rows}>
          <SummaryRow label={I18n.t('summaryFirstName')} value={firstName}/>
          <SummaryRow label={I18n.t('summaryLastName')} value={lastName}/>
          <SummaryRow label={I18n.t('summaryEmail')} value={email}/>
          <SummaryRow label={I18n.t('summaryRole')} value={personType && personType.name}/>
          <SummaryRow label={I18n.t('summaryAgeRange')} value={ageRange}/>
          <SummaryRow label={I18n.t('summaryZipCode')} value={zip}/>
          <SummaryRow label={I18n.t('summaryExpectedDue')} value={dueDate}/>
          <SummaryRow label={I18n.t('summaryRace')} value={ethnicity}/>
          <SummaryRow label={I18n.t('summaryFeedback')} value={feedback === true ? I18n.t('yes') ? feedback === false : I18n.t('no') : null}/>
        </View>
        <Button style={s.restartBtn} btnType='primary' onPress={this.restart}>
          {I18n.t('restart')}
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  // TODO make it cleaner
  let formData = {}
  if (state.form.Login && state.form.Login.values) {
    formData = {
      ...formData,
      ...state.form.Login.values
    }
  }
  if (state.form.Registration && state.form.Registration.values) {
    formData = {
      ...formData,
      ...state.form.Registration.values
    }
  }
  return ({
    ...formData,
    personType: state.User.personType,
    ageRange: state.User.ageRange,
    dueDate: state.User.dueDate,
    ethnicity: state.User.ethnicity,
    notifications: state.User.notifications,
    feedback: state.User.feedback,
  })
}

const mapDispatchToProps = {
  clearUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen)