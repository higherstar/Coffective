// @flow

import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from '../../themes'
import s from './styles'
import type { TLoader } from './types'

const Loader = ({ visible }: TLoader) =>
  visible ? <View style={s.loaderContainer}>
    <View style={s.loader}>
      <ActivityIndicator
        size='large'
        animating={visible}
        color={Colors.white}
      />
    </View>
  </View> : null

export default Loader
