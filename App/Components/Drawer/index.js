// @flow

import React from 'react'
import { View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Txt } from '../'
import s from './styles'
import type { Props, NavigationRoute } from './types'

class Drawer extends React.Component {
  render () {
    const {
      navigation: { state, navigate },
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
      <ScrollView>
        <View style={[s.container, style]}>
          {items.map((route: NavigationRoute, index: number) => {
              const focused = activeItemKey === route.key
              const color = focused ? activeTintColor : inactiveTintColor
              const backgroundColor = focused
                ? activeBackgroundColor
                : inactiveBackgroundColor
              const scene = { route, index, focused, tintColor: color }
              const icon = renderIcon(scene)
              const label = getLabel(scene)
              return index !== 0 ? (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => {
                    onItemPress({ route, focused })
                  }}
                  delayPressIn={0}
                >
                  <View style={[s.item, { backgroundColor }]}>
                    {icon
                      ? <View
                      style={[s.icon, focused ? null : s.inactiveIcon]}
                    >
                      {icon}
                    </View>
                      : null}
                    {typeof label === 'string'
                      ? <Txt style={[s.label, { color }, labelStyle]}>
                      {label}
                    </Txt>
                      : label}
                  </View>
                </TouchableOpacity>
              ) : null
            }
          )}
        </View>
      </ScrollView>
    )
  }
}

export default Drawer
