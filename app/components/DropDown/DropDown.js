// @flow
import React from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

class DrpoDown extends React.Component {
  render() {
    let data = [
      {
        value: '1'
      },
      {
        value: '2'
      },
      {
        value: '3'
      }
    ]
    return (
      <View>
        <Dropdown data={data} />
      </View>
    )
  }
}

export default DrpoDown
