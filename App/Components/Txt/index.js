// @flow
import React from 'react'
import { Text } from 'react-native'
import type { TTxt } from './types'
import s from './styles'

const Txt = ({ children, textType = 'normal', style }: TTxt): React.Element<any> =>
  <Text style={[s.text, s[textType], style]}>
    {children}
  </Text>

export default Txt
