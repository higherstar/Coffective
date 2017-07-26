import React from 'react'
import { ScrollView, Picker } from 'react-native'
import { Button, SafeDataInfo, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'

class SelectEthnicityScreen extends React.Component {
  static navigationOptions = {}

  state = {
    selectedEthnicity: '',
    ethnicityList: [
      'Afghan',
      'Albanian',
      'Algerian',
      'American',
      'Andorran',
      'Angolan',
      'Antiguans',
      'Argentinean',
      'Armenian',
      'Australian',
      'Austrian',
      'Azerbaijani',
      'Bahamian',
      'Bahraini',
      'Bangladeshi',
      'Barbadian',
      'Barbudans',
      'Batswana',
      'Belarusian',
      'Belgian',
      'Belizean',
      'Beninese',
      'Bhutanese',
      'Bolivian',
      'Bosnian',
      'Brazilian',
      'British',
      'Bruneian',
      'Bulgarian',
      'Burkinabe',
      'Burmese',
      'Burundian',
      'Cambodian',
      'Cameroonian',
      'Canadian',
      'Cape Verdean',
      'Central African',
      'Chadian',
      'Chilean',
      'Chinese',
      'Colombian',
      'Comoran',
      'Congolese',
      'Costa Rican',
      'Croatian',
      'Cuban',
      'Cypriot',
      'Czech',
      'Danish',
      'Djibouti',
      'Dominican',
      'Dutch',
      'East Timorese',
      'Ecuadorean',
      'Egyptian',
      'Emirian',
      'Equatorial Guinean',
      'Eritrean',
      'Estonian',
      'Ethiopian',
      'Fijian',
      'Filipino',
      'Finnish',
      'French',
      'Gabonese',
      'Gambian',
      'Georgian',
      'German',
      'Ghanaian',
      'Greek',
      'Grenadian',
      'Guatemalan',
      'Guinea-Bissauan',
      'Guinean',
      'Guyanese',
      'Haitian',
      'Herzegovinian',
      'Honduran',
      'Hungarian',
      'I-Kiribati',
      'Icelander',
      'Indian',
      'Indonesian',
      'Iranian',
      'Iraqi',
      'Irish',
      'Israeli',
      'Italian',
      'Ivorian',
      'Jamaican',
      'Japanese',
      'Jordanian',
      'Kazakhstani',
      'Kenyan',
      'Kittian and Nevisian',
      'Kuwaiti',
      'Kyrgyz',
      'Laotian',
      'Latvian',
      'Lebanese',
      'Liberian',
      'Libyan',
      'Liechtensteiner',
      'Lithuanian',
      'Luxembourger',
      'Macedonian',
      'Malagasy',
      'Malawian',
      'Malaysian',
      'Maldivan',
      'Malian',
      'Maltese',
      'Marshallese',
      'Mauritanian',
      'Mauritian',
      'Mexican',
      'Micronesian',
      'Moldovan',
      'Monacan',
      'Mongolian',
      'Moroccan',
      'Mosotho',
      'Motswana',
      'Mozambican',
      'Namibian',
      'Nauruan',
      'Nepalese',
      'New Zealander',
      'Nicaraguan',
      'Nigerian',
      'Nigerien',
      'North Korean',
      'Northern Irish',
      'Norwegian',
      'Omani',
      'Pakistani',
      'Palauan',
      'Panamanian',
      'Papua New Guinean',
      'Paraguayan',
      'Peruvian',
      'Polish',
      'Portuguese',
      'Qatari',
      'Romanian',
      'Russian',
      'Rwandan',
      'Saint Lucian',
      'Salvadoran',
      'Samoan',
      'San Marinese',
      'Sao Tomean',
      'Saudi',
      'Scottish',
      'Senegalese',
      'Serbian',
      'Seychellois',
      'Sierra Leonean',
      'Singaporean',
      'Slovakian',
      'Slovenian',
      'Solomon Islander',
      'Somali',
      'South African',
      'South Korean',
      'Spanish',
      'Sri Lankan',
      'Sudanese',
      'Surinamer',
      'Swazi',
      'Swedish',
      'Swiss',
      'Syrian',
      'Taiwanese',
      'Tajik',
      'Tanzanian',
      'Thai',
      'Togolese',
      'Tongan',
      'Trinidadian/Tobagonian',
      'Tunisian',
      'Turkish',
      'Tuvaluan',
      'Ugandan',
      'Ukrainian',
      'Uruguayan',
      'Uzbekistani',
      'Venezuelan',
      'Vietnamese',
      'Welsh',
      'Yemenite',
      'Zambian',
      'Zimbabwean'
    ]
  }

  openAskForFeedbackScreen = () => {
    this.props.navigation.navigate('AskForFeedbackScreen')
  }

  selectEthnicity = (selectedEthnicity) => {
    this.setState({selectedEthnicity})
  }

  render () {
    const {selectedEthnicity, ethnicityList} = this.state
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        <TextView style={s.myEthnicity} textStyle={s.myEthnicityText} textType='h1'>
          {I18n.t('myEthnicity')}
        </TextView>
        <Picker
          selectedValue={selectedEthnicity}
          onValueChange={this.selectEthnicity}
        >
          {ethnicityList.map((ethnicity, i) =>
            <Picker.Item key={i} label={ethnicity} value={ethnicity}>{ethnicity}</Picker.Item>
          )}
        </Picker>
        <SafeDataInfo style={s.safeData}/>
        <Button style={s.proceedBtn} btnType='primary' onPress={this.openAskForFeedbackScreen}>
          {I18n.t('proceed')}
        </Button>
        <Button style={s.skipBtn} textStyle={s.skipBtnText} btnType='link' onPress={this.openAskForFeedbackScreen}>
          {I18n.t('skipForNow')}
        </Button>
      </ScrollView>
    )
  }
}

export default SelectEthnicityScreen
