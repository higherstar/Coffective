// @flow
import React from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt } from '../../components'
import { Images } from '../../themes'
import s from './WelcomeStyles'

class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    return (
      <View style={s.container}>
        <Video
          source={Images.backgroundVideo}
          style={s.backgroundVideo}
          muted
          resizeMode='cover'
          repeat
        />
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('welcomeHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('welcomeDescription')}
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
