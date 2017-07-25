// @flow

import React from 'react'
import { View, Text } from 'react-native'
import Txt from '../Txt'
import type { TTxt } from './types'
import s from './styles'

const TextView = ({ children, style, textStyle, textType }: TTxt): React.Element<any> =>
  <View style={style}>
    <Txt textType={textType} style={[s.text, textStyle]}>
      {children}
    </Txt>
  </View>

export default TextView
