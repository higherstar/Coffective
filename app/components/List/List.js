// @flow
import React from 'react'
import { View, FlatList } from 'react-native'
import {Txt} from '../'
import s from './ListStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// TODO
class List extends React.Component {
  static defaultProps = {
    iconName: 'check-circle'
  }

  render () {
    const {style, prefix, iconName, iconStyle, titleTextStyle, titleProp, ...props} = this.props
    return (
      <FlatList
        style={[s.list, style]}
        renderItem={({item}) => (
          <View style={s.item}>
            {prefix || <Icon style={[s.icon, iconStyle]} name={iconName}/>}
            <Txt.View style={s.title} textStyle={[s.titleText, titleTextStyle]}>
              {titleProp ? item[titleProp] : item}
            </Txt.View>
          </View>
        )}
        {...props}
      />
    )
  }
}

export default List
