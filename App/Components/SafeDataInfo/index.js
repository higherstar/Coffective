// @flow

import React from 'react'
import { TextView, Txt } from '../'
import I18n from 'react-native-i18n'
import s from './styles'

const SafeDataInfo = ({ style }) =>
  <TextView style={[s.safeData, style]} textStyle={s.safeDataText}>
    <Txt style={s.safeDataLabel}>{I18n.t('safeDataLabel')}</Txt>
    {I18n.t('safeDataInfo')}
  </TextView>

export default SafeDataInfo
