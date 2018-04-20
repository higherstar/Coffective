// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt } from '../../components'
import s from './HomeStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return ({
      headerRight: null,
      headerTitle: navigation.state.params && navigation.state.params.user ? `Welcome, ${navigation.state.params.user.name}` : '',
      headerTitleStyle: s.title,
      headerLeft: (
        <DrawerButton navigation={navigation}/>
      )
    })
  }

  componentDidMount () {
    // https://github.com/react-navigation/react-navigation/issues/313
    this.props.navigation.setParams({user: this.props.user})
  }

  render () {
    const {navigation} = this.props
    // TODO add small carousel
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.homeBackground}
          />
        </View>
        <ScrollView style={s.content}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Checklist')}
            style={s.checklistCard}
          >
            <Txt.View style={s.checklistDescription} textStyle={s.checklistDescriptionText}>
              {'Get you and your baby off to a great start'}
            </Txt.View>
            <Txt.View style={s.checklistHeader} textStyle={s.checklistHeaderText}>
              {'Checklist'}
            </Txt.View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('BuildTeam')}
            style={s.buildTeamCard}
          >
            <Txt.View style={s.buildTeamHeader} textStyle={s.buildTeamHeaderText}>
              {I18n.t('buildTeamHeader')}
            </Txt.View>
            <Txt.View style={s.buildTeamDescription} textStyle={s.buildTeamDescriptionText}>
              {I18n.t('buildTeamDescription')}
            </Txt.View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.home,
  user: state.user.user,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
