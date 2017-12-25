import React from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { Button, SafeDataInfo, Select, TextView } from '../../components'
import I18n from 'react-native-i18n'
import s from './styles'
import { setEthnicity } from '../../reducers/user'
import { connect } from 'react-redux'

class SelectEthnicityScreen extends React.Component {
  static navigationOptions = {}

  state = {
    ethnicityList: [
      'White',
      'Hispanic',
      'Native',
      'Asian',
      'African American',
      'Hawaiian/Pacific Islander',
      'Two or more',
    ]
  }

  openAskForFeedbackScreen = () => {
    this.props.navigation.navigate('AskForFeedbackScreen')
  }

  proceed = () => {
    this.openAskForFeedbackScreen()
    this.props.setEthnicity(this.props.selectedEthnicity || this.state.ethnicityList[0])
  }

  skip = () => {
    this.openAskForFeedbackScreen()
    this.props.setEthnicity('')
  }

  render () {
    const {ethnicityList} = this.state
    const {selectedEthnicity} = this.props

    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myEthnicity} textStyle={s.myEthnicityText} textType='h1'>
          {I18n.t('myEthnicity')}
        </TextView>
        <View style={[s.selectWrapper, Platform.OS === 'android' && {paddingHorizontal: 0}]}>
          <Select
            placeholder={I18n.t('selectEthnicity')}
            defaultOption={Platform.OS === 'android' ? (selectedEthnicity || this.state.ethnicityList[0]) : selectedEthnicity}
            options={ethnicityList}
            onSelect={this.props.setEthnicity}
          />
        </View>
        <SafeDataInfo style={s.safeData}/>
        <Button
          style={s.proceedBtn}
          btnType='primary'
          onPress={this.proceed}
          disabled={!selectedEthnicity && Platform.OS !== 'android'}
        >
          {I18n.t('proceed')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.skip}>
          {I18n.t('skipForNow')}
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  selectedEthnicity: state.user.ethnicity
})

const mapDispatchToProps = {
  setEthnicity
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectEthnicityScreen)