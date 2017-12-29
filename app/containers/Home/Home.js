// @flow
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt } from '../../components'
import s from './HomeStyles'

class Home extends React.Component {
  static navigationOptions = {
    // TODO change height and background for NavBar
  }

  render () {
    const {navigation} = this.props
    // TODO add small carousel
    return (
      <ScrollView style={s.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Wic')} style={s.wicCard}>
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
    )
  }
}

const mapStateToProps = state => ({
  ...state.home,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
