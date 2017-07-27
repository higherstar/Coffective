import React from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import DatePicker from 'react-native-datepicker'
import { Images } from '../../Themes'
import { setDueDate } from '../../Redux/UserRedux'

class SelectDueDateScreen extends React.Component {
  static navigationOptions = {}

  openSelectAgeScreen = () => {
    this.props.navigation.navigate('SelectAgeScreen')
  }

  skip = () => {
    this.openSelectAgeScreen()
    this.props.setDueDate('')
  }

  render () {
    const {dueDate} = this.props
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
          format='DD MMM YYYY'
          confirmBtnText={I18n.t('confirm')}
          cancelBtnText={I18n.t('cancel')}
          iconComponent={<Image source={Images.calendar} style={s.dateIcon}/>}
          customStyles={{
            dateInput: s.dateInput,
            dateText: s.dateText,
            placeholderText: s.datePlaceholder,
            btnTextConfirm: s.btnTextConfirm,
            btnTextCancel: s.btnTextCancel,
          }}
          onDateChange={this.props.setDueDate}
        />
        <SafeDataInfo style={s.safeData}/>
        <Button style={s.proceedBtn} btnType='primary' onPress={this.openSelectAgeScreen} disabled={!dueDate}>
          {I18n.t('proceed')}
        </Button>
        <Button
          style={s.skipBtn}
          textStyle={s.skipBtnText}
          btnType='link'
          onPress={this.skip}
        >
          {I18n.t('skipForNow')}
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  dueDate: state.User.dueDate
})

const mapDispatchToProps = {
  setDueDate
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectDueDateScreen)
