// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View, ImageBackground } from 'react-native'
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
          >
            <ImageBackground
              style={s.buildTeamCard}
              source={Images.checkcListBackground}
            >
              <Txt.View textStyle={s.buildTeamHeaderText}>
                {'Checklist'}
              </Txt.View>
              <Txt.View textStyle={s.buildTeamDescriptionText}>
                {'Get you and your baby off to a great start'}
              </Txt.View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('BuildTeam')}
          >
            <ImageBackground
              style={s.buildTeamCard}
              source={Images.buildMyTeamBackground}
            >
              <Txt.View textStyle={s.buildTeamHeaderText}>
                {I18n.t('buildTeamHeader')}
              </Txt.View>
              <Txt.View textStyle={s.buildTeamDescriptionText}>
                {I18n.t('buildTeamDescription')}
              </Txt.View>
            </ImageBackground>
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
