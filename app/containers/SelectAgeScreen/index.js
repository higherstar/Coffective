import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../components'
import I18n from 'react-native-i18n'
import s from './styles'
import { RadioButtons } from 'react-native-radio-buttons'
import { Images } from '../../themes'
import { setAgeRange } from '../../reducers/user'
import { connect } from 'react-redux'

class SelectAgeScreen extends React.Component {
  static navigationOptions = {}

  state = {
    options: [
      'Between 15 and 19',
      'Between 20 and 24',
      'Between 25 and 29',
      'Between 30 and 34',
      'Between 35 and 39',
      'Between 40 and 44',
    ]
  }

  openSelectEthnicityScreen = () => {
    this.props.navigation.navigate('SelectEthnicityScreen')
  }

  skip = () => {
    this.openSelectEthnicityScreen()
    this.props.setAgeRange(null)
  }

  renderOption = (option, selected, onSelect, index) => {
    return (
      <TouchableOpacity style={s.option} activeOpacity={1} onPress={onSelect} key={index}>
        {selected ? (
          <Image source={Images.checkedRadioButton} style={s.selectedRadioBtnIcon}/>
        ) : (
          <View style={[s.radioBtnIcon]}/>
        )}
        <TextView textType='h6'>{option}</TextView>
      </TouchableOpacity>
    )
  }

  render () {
    const {options} = this.state
    const {ageRange} = this.props
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
            onSelection={this.props.setAgeRange}
            selectedOption={ageRange}
            renderContainer={(children) => <View>{children}</View>}
            renderOption={(...props) => this.renderOption(...props)}
          />
        </View>
        <SafeDataInfo style={s.safeData} />
        <Button style={s.proceedBtn} btnType='primary' onPress={this.openSelectEthnicityScreen} disabled={!ageRange}>
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
  ageRange: state.user.ageRange,
})

const mapDispatchToProps = {
  setAgeRange
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAgeScreen)
