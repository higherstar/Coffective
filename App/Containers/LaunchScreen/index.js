import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button } from '../../Components'
import I18n from 'react-native-i18n'
import PersonTypeScreen from '../../Containers/PersonTypeScreen'
import s from './styles'

class LaunchScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // to prevent appearing when screen is changed
    headerRight: null
  }

  openPersonTypeScreen = () => {
    this.props.navigation.navigate('PersonTypeScreen')
  }

  render () {
    return (
      <Image source={{uri: 'https://dummyimage.com/600x400'}} style={s.backgroundImage}>
        <View style={s.learnMore}>
          <Button onPress={this.openPersonTypeScreen}>
            {I18n.t('learnMore')}
          </Button>
        </View>
      </Image>
    )
  }
}

export default LaunchScreen
