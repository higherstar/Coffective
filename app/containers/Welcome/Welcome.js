// @flow
import React from 'react'
import { Image, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt } from '../../components'
import { Images } from '../../themes'
import s from './WelcomeStyles'

class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
    headerLeft: null,
    headerRight: null,
    drawerLockMode: 'locked-closed',
  }

  render () {
    return (
      <View style={s.container}>
        <Image
          source={Images.welcomeBackground}
          style={s.backgroundImage}
        />
        <View style={s.overlay}/>
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('welcomeHeader')}
          </Txt.View>
          <Button
            type='primary'
            size='lg'
            style={s.getStartedBtn}
            onClick={() => this.props.navigation.navigate('Guide')}
          >
            {I18n.t('getStarted')}
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
