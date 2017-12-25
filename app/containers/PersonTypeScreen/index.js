import React from 'react'
import { connect } from 'react-redux'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, TextView } from '../../components'
import I18n from 'react-native-i18n'
import s from './styles'
import { Images } from '../../themes'
import { setPersonType } from '../../reducers/user'

class PersonTypeScreen extends React.Component {
  static navigationOptions = {}

  state = {
    personTypes: [
      {
        id: 1,
        name: 'Pregnant Mother',
        image: Images.mother,
      },
      {
        id: 2,
        name: 'Doctor',
        image: Images.doctor,
      },
      {
        id: 3,
        name: 'Father',
        image: Images.father,
      },
      {
        id: 4,
        name: 'Father',
        image: Images.father,
      },
      {
        id: 5,
        name: 'Father',
        image: Images.father,
      },
      {
        id: 6,
        name: 'Father',
        image: Images.father,
      },
    ]
  }

  proceed = () => {
    if (this.props.selectedPersonType.id === 1) {
      this.props.navigation.navigate('SelectDueDateScreen')
    } else {
      this.props.navigation.navigate('SelectAgeScreen')
    }
  }

  render () {
    const {personTypes} = this.state
    const { selectedPersonType} = this.props
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
              <View key={personType.id} style={s.personTypeWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[s.personType, selectedPersonType && selectedPersonType.id === personType.id && s.selectedPersonType]}
                  onPress={() => this.props.setPersonType(personType)}
                >
                  <Image source={personType.image} style={s.image}/>
                  <TextView style={s.name} textStyle={s.nameText}>{personType.name}</TextView>
                </TouchableOpacity>
                {selectedPersonType && selectedPersonType.id === personType.id && <Image source={Images.check} style={s.checkMark}/>}
              </View>
            )}
          </View>
        </ScrollView>
        <Button
          style={s.proceedBtn}
          onPress={() => this.proceed()}
          disabled={!selectedPersonType}
        >
          {I18n.t('proceed')}
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedPersonType: state.user.personType,
})

const mapDispatchToProps = {
  setPersonType
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonTypeScreen)