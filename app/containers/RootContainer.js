import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import { startup } from '../reducers/global'
import ReduxPersist from '../config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = {
  startup,
}

export default connect(null, mapDispatchToProps)(RootContainer)
