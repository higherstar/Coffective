import React from 'react'
import { ScrollView } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'

class SelectEthnicityScreen extends React.Component {
  static navigationOptions = {}

  openSelectEthnicityScreen = () => {
    this.props.navigation.navigate('SelectEthnicityScreen')
  }

  render () {
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myEthnicity} textStyle={s.myEthnicityText} textType='h1'>
          {I18n.t('myEthnicity')}
        </TextView>
        <SafeDataInfo style={s.safeData}/>
        <Button style={s.proceedBtn} btnType='primary' onPress={this.openSelectEthnicityScreen}>
          {I18n.t('proceed')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.openSelectEthnicityScreen}>
          {I18n.t('skipForNow')}
        </Button>
      </ScrollView>
    )
  }
}

export default SelectEthnicityScreen
