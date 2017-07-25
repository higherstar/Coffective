import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button, Txt } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import HowItWorksScreen from '../../Containers/HowItWorksScreen'
import {Colors} from '../../Themes'

class CategoryScreen extends React.Component {
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
    sections: [
      {
        title: `We're here to give you what you need to know`,
        description: `As a new dad, your role is crucial! You are a "champion" for your baby and baby's mom. Learn easy steps to help everyone get a great start in the hospital. So you can focus on what's most important: becoming a family`
      },
      {
        title: `When you need to know it`,
        description: `You'll love our practical "to do" lists. They make it easy to know how and when to give support. And how to make sure you are a vital part of your child's life`
      },
      {
        title: `And there's more to come!`,
        description: `Watch for new info in the months ahead. You'll get answers to the most common questions of new dads. And you'll learn how other dads worked it out.\n\nUntil then, check out the app for yourself! Learn how to be your child's "champion".`
      },
    ]
  }

  openHowItWorksScreen = () => {
    this.props.navigation.navigate('HowItWorksScreen')
  }

  render () {
    const { sections } = this.state
    return (
      <ScrollView style={s.container}>
        <Image style={s.image} source={{uri: 'https://dummyimage.com/240x180'}}/>
        {sections.map((section, i) =>
          <View key={i} style={s.section}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>
                {section.title}
              </Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>
                {section.description}
              </Txt>
            </View>
          </View>
        )}
        <View style={s.getStarted}>
          <Button onPress={this.openHowItWorksScreen}>
            {I18n.t('getStarted')}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

export default CategoryScreen
