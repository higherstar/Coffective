// @flow
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Input, Txt } from '../../components'
import s from './StateStyles'
import { selectState } from '../../reducers/register'
import { RadioButtons } from 'react-native-radio-buttons'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { SkipButton } from '../../navigation/AppNavigation'

// TODO move it
const states = [
  'Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  ' North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming'
]

const StateItem = ({option, selected, onSelect, index}) =>
  <TouchableOpacity style={s.option} activeOpacity={1} onPress={onSelect} key={index}>
    <Txt.View>{option}</Txt.View>
    {selected && (
      <Icon
        style={s.checkIcon}
        name='check'
      />
    )}
  </TouchableOpacity>

class State extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <SkipButton navigation={navigation} routeName='Age'/>
    )
  })

  state = {
    filteredStates: states
  }

  filterStates = (value) => {
    this.setState({filteredStates: states.filter(item => item.toLowerCase().includes(value.toLowerCase()))})
  }

  render () {
    const {selectState, selectedState, navigation} = this.props
    const {filteredStates} = this.state
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('stateHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('whatState')}
          </Txt.View>
          <Input
            style={s.search}
            focus
            name='search'
            placeholder={I18n.t('search')}
            returnKeyType='search'
            onChangeText={this.filterStates}
            suffix={
              <Icon
                name='search'
                style={s.searchIcon}
              />
            }
          />
        </View>
        <ScrollView style={s.content} keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag'>
          <RadioButtons
            options={filteredStates}
            onSelection={(...props) => {
              selectState(...props)
              navigation.navigate('Age')
            }}
            selectedOption={selectedState}
            renderContainer={(children) => <View>{children}</View>}
            renderOption={(option, selected, onSelect, index) =>
              <StateItem option={option} selected={selected} onSelect={onSelect} key={index}/>
            }
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  selectState,
}

export default connect(mapStateToProps, mapDispatchToProps)(State)
