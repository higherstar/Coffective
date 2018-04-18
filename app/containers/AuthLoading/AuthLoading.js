import React from 'react'
import { View, } from 'react-native'
import s from './AuthLoadingStyles'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'

class AuthLoading extends React.Component {
  render () {
    return (
      <View style={s.container}>
        <Spinner visible/>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)
