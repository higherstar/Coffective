// @flow

import React from 'react'
import type {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
  NavigationRoute,
  Style
} from 'react-navigation/src/TypeDefinition'
import type { DrawerScene, DrawerItem } from 'react-navigation/src/views/Drawer/DrawerView'

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>,
  items: Array<NavigationRoute>,
  activeItemKey?: string,
  activeTintColor?: string,
  activeBackgroundColor?: string,
  inactiveTintColor?: string,
  inactiveBackgroundColor?: string,
  getLabel: (scene: DrawerScene) => ?(React.Element<*> | string),
  renderIcon: (scene: DrawerScene) => ?React.Element<*>,
  onItemPress: (info: DrawerItem) => void,
  style?: Style,
  labelStyle?: Style,
}

export type { Props, NavigationRoute }
