import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import { startup } from '../../reducers/global'
import ReduxPersist from '../../config/ReduxPersist'
import s from './RootStyles'
import { getTokenFromStorage, getUser } from '../../reducers/user'

class RootContainer extends Component {
  checkIfLoggedIn = async () => {
    await this.props.getTokenFromStorage()
    await this.props.getUser()
  }

  componentDidMount () {
    this.checkIfLoggedIn()
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={s.applicationView}>
        <StatusBar barStyle='light-content'/>
        <ReduxNavigation />
      </View>
    )
  }
}

const mapDispatchToProps = {
  startup,
  getUser,
  getTokenFromStorage,
}

export default connect(null, mapDispatchToProps)(RootContainer)
