// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { RadioButtons } from '../../components'
import s from './ChampionRoleStyles'
import { BackButton } from '../../navigation/AppNavigation'
import { Images } from '../../themes'
import { setRole } from '../../reducers/champion'
import { CHAMPION_ROLES } from '../../constants'

class ChampionRole extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    title: I18n.t('championRoleTitle'),
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  render () {
    const {navigation, role, setRole} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.championBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <RadioButtons
            options={CHAMPION_ROLES}
            onSelection={(item) => {
              setRole(item)
              navigation.goBack()
            }}
            selectedOption={role}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  role: state.champion.role,
})

const mapDispatchToProps = {
  setRole,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionRole)
