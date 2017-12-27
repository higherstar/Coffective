import React from 'react'
import { connect } from 'react-redux'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './PersonTypeStyles'
import { Images } from '../../themes'
import { setPersonType } from '../../reducers/register'

// TODO move it
const personTypes = [
  {
    id: 1,
    name: 'Mom',
    // TODO change images
    image: Images.mother,
  },
  {
    id: 2,
    name: 'Parent',
    image: Images.father,

  },
  {
    id: 3,
    name: 'Nurse',
    image: Images.doctor,
  },
  {
    id: 4,
    name: 'Provider',
    image: Images.doctor,
  },
  {
    id: 5,
    name: 'Friend',
    image: Images.doctor,
  },
  {
    id: 6,
    name: 'Other',
    image: Images.doctor,
  },
]

class PersonTypeScreen extends React.Component {
  // TODO add Skip button
  static navigationOptions = {}

  render () {
    const {setPersonType, navigation} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('welcome')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('howWeCanDefineYou')}
          </Txt.View>
        </View>
        <View style={s.content}>
          <View style={s.personTypes}>
            {personTypes.map(personType =>
              <TouchableOpacity
                key={personType.id}
                style={s.personType}
                onPress={() => {
                  setPersonType(personType)
                  navigation.navigate('Name')
                }}
              >
                <Image source={personType.image} style={s.image}/>
                <Txt.View style={s.name} textStyle={s.nameText}>
                  {personType.name}
                </Txt.View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={s.footer}>
          <Txt.View textStyle={s.haveAccountText}>
            {I18n.t('haveAccount')}
          </Txt.View>
          <Button
            type='link'
            style={s.loginBtn}
            onClick={() => this.props.navigation.navigate('Login')}
          >
            {I18n.t('login')}
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  setPersonType,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonTypeScreen)
