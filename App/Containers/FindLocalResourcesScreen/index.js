import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import s from './styles'
import {Colors} from '../../Themes'

class FindLocalResourcesScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Find Local Resources',
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerTintColor: Colors.white
  })

  render () {
    return (
      <ScrollView style={s.container}>
      </ScrollView>
    )
  }
}

export default FindLocalResourcesScreen
