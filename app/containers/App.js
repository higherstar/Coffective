import '../config'
import DebugConfig from '../config/DebugConfig'
import AppConfig from '../config/AppConfig'
import React from 'react'
import { Provider } from 'react-redux'
import Root from './Root/Root'
import createStore from '../reducers'
import EStyleSheet from 'react-native-extended-stylesheet'
import SplashScreen from 'react-native-splash-screen'
import createFetch from '../createFetch'

EStyleSheet.build({})

const customFetch = createFetch(fetch, {
  apiUrl: AppConfig.apiUrl,
})

// create our store
const store = createStore({fetch: customFetch})

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends React.Component {

  componentDidMount () {
    SplashScreen.hide()
  }

  render () {

    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
