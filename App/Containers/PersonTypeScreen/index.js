import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Txt } from '../../Components'
import CategoriesScreen from '../../Containers/CategoriesScreen'
import CategoryScreen from '../../Containers/CategoryScreen'
import s from './styles'
import {Colors} from '../../Themes'

class PersonTypeScreen extends React.Component {
  static navigationOptions = {
    title: 'I am a ...',
    headerRight: null,
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerTintColor: Colors.white
  }

  state = {
    personTypes: [
      {
        name: 'Pregnant Mother',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1, 2 ]
      },
      {
        name: 'Breastfeeding Mother',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1, 2 ]
      },
      {
        name: 'Father',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1 ]
      },
      {
        name: 'Grandmother',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1 ]
      },
      {
        name: 'Health Educator',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1 ]
      },
      {
        name: 'Health Provider',
        image: 'https://dummyimage.com/128x80',
        categories: [ 1 ]
      },
    ]
  }

  openCategoriesScreen = (personType) => {
    this.props.navigation.navigate('CategoriesScreen', { personType })
  }

  openCategoryScreen = (personType) => {
    this.props.navigation.navigate('CategoryScreen', { personType })
  }

  render () {
    const { personTypes } = this.state
    return (
      <View style={s.container}>
        {personTypes.map((personType, i) =>
          <TouchableOpacity
            key={i}
            style={s.personType}
            onPress={() => personType.categories.length > 1 ? this.openCategoriesScreen(personType) : this.openCategoryScreen(personType)}
          >
            <Image source={{uri:personType.image}} style={s.image}>
              <View style={s.nameWrapper}>
                <Txt style={s.name}>{personType.name}</Txt>
              </View>
            </Image>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default PersonTypeScreen
