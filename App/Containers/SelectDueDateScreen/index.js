import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Button, TextView, SafeDataInfo } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import DatePicker from 'react-native-datepicker'

class SelectDueDateScreen extends React.Component {
  static navigationOptions = {}

  state = {
    dueDate: ''
  }

  handleChangeDueDate = (dueDate) => {
    this.setState({dueDate})
  }

  render () {
    const {dueDate} = this.state
    return (
      <View style={s.container}>
        <TextView
          style={s.header}
          textStyle={s.headerText}
          textType='h1'
        >
          {I18n.t('iExpectToBeDueOn')}
        </TextView>
        <DatePicker
          style={s.date}
          date={dueDate}
          mode='date'
          placeholder={I18n.t('selectDate')}
          format='YYYY-MM-DD'
          confirmBtnText={I18n.t('confirm')}
          cancelBtnText={I18n.t('cancel')}
          showIcon={false}
          customStyles={{
            dateInput: s.dateInput,
            dateText: s.dateText,
            placeholderText: s.datePlaceholder
          }}
          onDateChange={this.handleChangeDueDate}
        />
        <SafeDataInfo style={s.safeData} />
        <Button style={s.proceedBtn} btnType='primary'>
          {I18n.t('proceed')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link'>
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SelectDueDateScreen)
