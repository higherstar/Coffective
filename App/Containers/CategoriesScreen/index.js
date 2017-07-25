import React from 'react'
import { Image, View, ScrollView } from 'react-native'
import { Txt, Button } from '../../Components'
import I18n from 'react-native-i18n'
import CategoryScreen from '../../Containers/CategoryScreen'
import s from './styles'
import {Colors} from '../../Themes'

class CategoriesScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.personType.name,
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerTintColor: Colors.white
  })

  state = {
    categories: [
      {
        image: 'https://dummyimage.com/240x180',
        name: 'Prepared Checklist',
        description: 'This checklist includes topics that will help you and your baby get off to a great start. Talk about it with your care team while you are pregnant.',
        type: 'category'
      },
      {
        image: 'https://dummyimage.com/240x180',
        name: 'Build My Team',
        description: 'It is important to build a team that shares your goals. When you are pregnant you should ask them questions and tell them your goals.',
        type: 'buildTeam'
      },
    ]
  }

  openCategoryScreen = () => {
    const { personType } = this.props.navigation.state.params
    this.props.navigation.navigate('CategoryScreen', { personType })
  }

  openBuildTeamScreen = () => {
    this.props.navigation.navigate('BuildTeamScreen')
  }

  render () {
    const { categories } = this.state
    return (
      <ScrollView style={s.container}>
        {categories.map((category, i) =>
          <View key={i} style={s.section}>
            <Image style={s.image} source={{uri: category.image}}/>
            <View style={s.nameWrapper}>
              <Txt style={s.name}>{category.name}</Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>{category.description}</Txt>
            </View>
            <View style={s.getStarted}>
              <Button onPress={category.type === 'buildTeam' ? this.openBuildTeamScreen : this.openCategoryScreen}>{I18n.t('getStarted')}</Button>
            </View>
          </View>
        )}
      </ScrollView>
    )
  }
}

export default CategoriesScreen
