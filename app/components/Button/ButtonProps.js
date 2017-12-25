// @flow
import React from 'react'

export type ButtonType = 'primary' | 'default'
export type ButtonShape = 'circle'
export type ButtonSize = 'small' | 'default' | 'large'

export type ButtonProps = {
  children?: React.Element<any>,
  style?: Object[] | Object,
  txtStyle?: Object[] | Object,
  outline?: boolean,
  onPress: Function,
  underlayColor?: string,
  icon?: string,
  loading?: boolean,
  shape?: ButtonShape,
  type?: ButtonType,
  size?: ButtonSize,
}
