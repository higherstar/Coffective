import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import NotificationsIOS from 'react-native-notifications'
import { Platform } from 'react-native'

EStyleSheet.build({})

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  // TODO add listeners for android
  constructor () {
    super()

    if (Platform.OS === 'ios') {
      NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this))
      NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this))
    }
  }

  onPushRegistered (deviceToken) {
    console.log('Device Token Received', deviceToken)
  }

  onPushRegistrationFailed (error) {
    // For example:
    //
    // error={
    //   domain: 'NSCocoaErroDomain',
    //   code: 3010,
    //   localizedDescription: 'remote notifications are not supported in the simulator'
    // }
    console.error(error)
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') {
      // prevent memory leaks!
      NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this))
      NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this))
    }
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
