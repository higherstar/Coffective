import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { ButtonN, TextView } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SelectedSection = ({ title, description, buttonTitle }) =>
  <View style={s.selectedSection}>
    <TextView textType='h4' style={s.title} textStyle={s.titleText}>
      {title}
    </TextView>
    <TextView style={s.description} textStyle={s.descriptionText}>
      {description}
    </TextView>
    <ButtonN
      style={s.button}
      onPress={() => {}}
      btnType='link'
      size='lg'
    >
      {buttonTitle}
    </ButtonN>
  </View>

class BuildTeamScreen extends React.Component {
  static navigationOptions = {
    title: 'Build my team'
  }

  state = {
    sections: [
      {
        header: 'Choose your hospital',
        title: 'Choosing a Hospital',
        description: 'There are a few things to consider when choosing a hospital to ensure you are receiving the best care possible:',
        buttonTitle: 'View Considerations',
      },
      {
        header: 'Choose your Champion',
        title: 'Choosing a Champion',
        description: 'There are a few things to consider when choosing a hospital to ensure you are receiving the best care possible:',
        buttonTitle: 'View Considerations',
      },
      {
        header: 'Choose your doctor or midwife',
        title: 'Choosing a Hospital',
        description: 'There are a few things to consider when choosing a hospital to ensure you are receiving the best care possible:',
        buttonTitle: 'View Considerations',
      },
      {
        header: 'Choose your baby\'s doctor',
        title: 'Choosing a Champion',
        description: 'There are a few things to consider when choosing a hospital to ensure you are receiving the best care possible:',
        buttonTitle: 'View Considerations',
      },
    ],
    selectedSection: null
  }

  selectSection (selectedSection) {
   this.setState({ selectedSection })
  }

  render () {
    const { sections, selectedSection } = this.state
    return (
      <ScrollView
        style={s.scrollContainer}
        contentContainerStyle={s.container}
      >
        {sections.map((section, i) =>
          <TouchableOpacity key={i} style={s.row} onPress={() => this.selectSection(section)}>
            <TextView style={s.header} textStyle={s.headerText}>
              {section.header}
            </TextView>
            <View style={s.rowIconWrapper}>
              <Icon
                style={s.rowIcon}
                name='keyboard-arrow-right'
              />
            </View>
          </TouchableOpacity>
        )}
        {selectedSection && <SelectedSection {...selectedSection}/>}
      </ScrollView>
    )
  }
}

export default BuildTeamScreen
