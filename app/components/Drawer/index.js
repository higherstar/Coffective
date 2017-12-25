// @flow

import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Txt } from '../'
import s from './styles'
import type { NavigationRoute, Props } from './types'
import { connect } from 'react-redux'
import { clearUserData } from '../../reducers/user'

class Drawer extends React.Component {
  render () {
    const {
      navigation: {state, navigate},
      items,
      activeItemKey,
      activeTintColor,
      activeBackgroundColor,
      inactiveTintColor,
      inactiveBackgroundColor,
      getLabel,
      renderIcon,
      onItemPress,
      style,
      labelStyle,
    }: Props = this.props
    return (
      <ScrollView style={{ backgroundColor: '#ECF4FF' }}>
        <View style={[s.container, style]}>
          <View style={s.drawerHeader}/>
          {items.map((route: NavigationRoute, index: number) => {
              const focused = activeItemKey === route.key
              const color = focused ? activeTintColor : inactiveTintColor
              const backgroundColor = focused
                ? activeBackgroundColor
                : inactiveBackgroundColor
              const scene = {route, index, focused, tintColor: color}
              const icon = renderIcon(scene)
              const label = getLabel(scene)
            // TODO make it cleaner
              if (index === 0) {
                return null
              } else if (index === 1) {
                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => {
                      onItemPress({route, focused})
                    }}
                    delayPressIn={0}
                  >
                    <View style={[s.item, {backgroundColor}]}>
                      {icon
                        ? <View
                          style={[s.icon, focused ? null : s.inactiveIcon]}
                        >
                          {icon}
                        </View>
                        : null}
                      {typeof label === 'string'
                        ? <Txt style={[s.label, {color}, labelStyle]}>
                          {label}
                        </Txt>
                        : label}
                    </View>
                  </TouchableOpacity>
                )
              } else if (index === 2) {
                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => {
                      onItemPress({route, focused})
                      this.props.clearUserData()
                    }}
                    delayPressIn={0}
                  >
                    <View style={[s.item, {backgroundColor}]}>
                      {icon
                        ? <View
                          style={[s.icon, focused ? null : s.inactiveIcon]}
                        >
                          {icon}
                        </View>
                        : null}
                      {typeof label === 'string'
                        ? <Txt style={[s.label, {color}, labelStyle]}>
                          {label}
                        </Txt>
                        : label}
                    </View>
                  </TouchableOpacity>
                )
              }
            }
          )}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
