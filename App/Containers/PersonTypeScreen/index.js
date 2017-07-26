import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'

class PersonTypeScreen extends React.Component {
  static navigationOptions = {}

  state = {
    selectedPersonType: null,
    personTypes: [
      {
        id: 1,
        name: 'Pregnant Mother',
        image: 'https://dummyimage.com/128x80',
      },
      {
        id: 2,
        name: 'Doctor',
        image: 'https://dummyimage.com/128x80',
      },
      {
        id: 3,
        name: 'Father',
        image: 'https://dummyimage.com/128x80',
      },
      {
        id: 4,
        name: 'Grandmother',
        image: 'https://dummyimage.com/128x80',
      },
      {
        id: 5,
        name: 'Health Educator',
        image: 'https://dummyimage.com/128x80',
      },
      {
        id: 6,
        name: 'Health Provider',
        image: 'https://dummyimage.com/128x80',
      },
    ]
  }

  selectPersonType = (selectedPersonType) => {
    this.setState({selectedPersonType})
  }

  render () {
    const {personTypes, selectedPersonType} = this.state
    const {navigation} = this.props
    return (
      <View style={s.container}>
        <ScrollView style={s.scrollContainer}>
          <TextView
            style={s.iAm}
            textStyle={s.iAmText}
            textType='h1'
          >
            {I18n.t('iAm').toUpperCase()}
          </TextView>
          <View style={s.personTypes}>
            {personTypes.map(personType =>
              <TouchableOpacity
                activeOpacity={1}
                key={personType.id}
                style={[s.personType, selectedPersonType && selectedPersonType.id === personType.id && s.selectedPersonType]}
                onPress={() => this.selectPersonType(personType)}
              >
                <Image source={{uri: personType.image}} style={s.image}/>
                <TextView style={s.name} textStyle={s.nameText}>{personType.name}</TextView>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
        <Button style={s.proceedBtn} onPress={() => navigation.navigate('SelectDueDateScreen')}>
          {I18n.t('proceed')}
        </Button>
      </View>
    )
  }
}

export default PersonTypeScreen
