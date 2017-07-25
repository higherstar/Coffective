import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button, Txt } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import ChecklistScreen from '../../Containers/ChecklistScreen'
import {Colors} from '../../Themes'

class HowItWorksScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerRight: null,
    headerTintColor: Colors.white
  })

  state = {
    sections: [
      {
        title: `Hospital preparation checklist`,
        description: `Use this list of best practices to guide your praparation and ensure you and baby get off to a great start together.`
      },
      {
        title: `How-to information`,
        description: `Walk through the step-by-step instructions for each topic from mom's, baby's, and/or champion's perspective.`
      },
      {
        title: `FAQ's & Overcoming barriers`,
        description: `Dive deeper with answers to common questions and advice for overcoming barriers you might face labeled "you can do it even when".`
      },
      {
        title: `I'm prepared & want`,
        description: `After you've learned about each topic, check the box to show you're prepared for and want that best practice if it's available at your hospital. Before you go into labor, share the list with your care team.`
      },
    ]
  }

  openChecklistScreen = () => {
    this.props.navigation.navigate('ChecklistScreen')
  }

  render () {
    const { sections } = this.state
    return (
      <ScrollView style={s.container}>
        <View style={s.headerWrapper}>
          <Txt style={s.header}>
            Here's how it works
          </Txt>
        </View>
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
          <Button btnType='secondary' onPress={this.openChecklistScreen}>
            {I18n.t('letsGetStarted')}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

export default HowItWorksScreen
