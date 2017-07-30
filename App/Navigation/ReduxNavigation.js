import React from 'react'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props
    // TODO fix - index is 0 all the time
    // if (nav.index !== 0) {
    //   return false
    // }
    dispatch(NavigationActions.back())
    return true
  }

  render () {
    const {dispatch, nav} = this.props
    return (
      <AppNavigation
        navigation={addNavigationHelpers({dispatch, state: nav})}
      />
    )
  }
}

const mapStateToProps = state => ({nav: state.nav})
export default connect(mapStateToProps)(ReduxNavigation)
