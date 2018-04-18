import React from 'react'
import { ActivityIndicator, View, } from 'react-native'
import s from './AuthLoadingStyles'
import { connect } from 'react-redux'

class AuthLoading extends React.Component {
  render () {
    return (
      <View style={s.container}>
        <ActivityIndicator/>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)
