// @flow
import React from 'react'
import { View, FlatList } from 'react-native'
import {Txt} from '../'
import s from './ListStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// TODO
class List extends React.Component {
  static defaultProps = {
  }

  render () {
    const {style, ...props} = this.props
    return (
      <FlatList
        style={[s.list, style]}
        renderItem={({item}) => (
          <View style={s.item}>
            <Icon style={s.itemIcon} name='check-circle'/>
            <Txt.View style={s.itemTitle} textStyle={s.itemTitleText}>{item.title}</Txt.View>
          </View>
        )}
        {...props}
      />
    )
  }
}

export default List
