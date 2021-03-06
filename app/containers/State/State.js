// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Input, RadioButtons, Txt } from '../../components'
import s from './StateStyles'
import { selectState } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { SkipButton } from '../../navigation/AppNavigation'
import { Images } from '../../themes'
import { STATES } from '../../constants'

class State extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
    headerRight: (
      <SkipButton navigation={navigation} routeName='Age'/>
    ),
    drawerLockMode: 'locked-closed',
  })

  state = {
    filteredStates: STATES,
    search: '',
  }

  handleChangeSearch = (value) => {
    this.setState({
      search: value,
      filteredStates: STATES.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
    })
  }

  render () {
    const {selectState, selectedState, navigation} = this.props
    const {filteredStates, search} = this.state
    return (
      <View style={s.container}>
        <View style={s.head}>
          <View style={s.background}>
            <Image
              source={Images.stateBackground}
              style={s.backgroundImage}
            />
          </View>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('stateHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('whatState')}
          </Txt.View>
          <Input
            style={s.search}
            placeholder={I18n.t('search')}
            returnKeyType='search'
            value={search}
            onChangeText={this.handleChangeSearch}
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
            onSelection={(item) => {
              selectState(item.label)
              navigation.navigate('Age')
            }}
            selectedOption={selectedState}
            testOptionEqual={(selectedValue, option) => selectedValue === option.label}
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
