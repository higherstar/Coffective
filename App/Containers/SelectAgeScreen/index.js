import React from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import { RadioButtons } from 'react-native-radio-buttons'

class SelectAgeScreen extends React.Component {
  static navigationOptions = {}

  state = {
    selectedOption: null,
    options: [
      'Between 15 and 19',
      'Between 20 and 24',
      'Between 25 and 29',
      'Between 30 and 34',
      'Between 35 and 39',
      'Between 40 and 44',
    ]
  }

  selectOption = (selectedOption) => {
    this.setState({selectedOption})
  }

  openSelectEthnicityScreen = () => {
    this.props.navigation.navigate('SelectEthnicityScreen')
  }

  renderOption = (option, selected, onSelect, index) => {
    return (
      <TouchableOpacity style={s.option} activeOpacity={1} onPress={onSelect} key={index}>
        <View style={[s.radioBtnIcon, selected && s.selectedRadioBtnIcon]}/>
        <TextView textType='h6'>{option}</TextView>
      </TouchableOpacity>
    )
  }

  render () {
    const {options, selectedOption} = this.state
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myAgeRange} textStyle={s.myAgeRangeText} textType='h1'>
          {I18n.t('myAgeRange')}
        </TextView>
        <View style={s.options}>
          <RadioButtons
            options={options}
            onSelection={this.selectOption}
            selectedOption={selectedOption}
            renderContainer={(children) => <View>{children}</View>}
            renderOption={(...props) => this.renderOption(...props)}
          />
        </View>
        <SafeDataInfo style={s.safeData} />
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

export default SelectAgeScreen
