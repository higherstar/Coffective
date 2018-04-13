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
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    // TODO https://github.com/react-navigation/react-navigation/issues/313
    headerTitle: `Welcome, Monika`,
    headerTitleStyle: s.title,
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

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
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}} style={s.wicCard}>
            <Txt.View style={s.wicDescription} textStyle={s.wicDescriptionText}>
              {I18n.t('wicDescription')}
            </Txt.View>
            <Txt.View style={s.wicHeader} textStyle={s.wicHeaderText}>
              {I18n.t('wicHeader')}
            </Txt.View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuildTeam')} style={s.buildTeamCard}>
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
