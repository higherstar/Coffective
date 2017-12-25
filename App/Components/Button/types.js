// @flow
import React from 'react'

type TButton = {
  children?: React.Element<any>,
  btnStyle?: string,
  style?: Object[] | Object,
  txtStyle?: Object[] | Object,
  outline?: boolean,
  onPress: Function,
  underlayColor?: string,
  icon?: string
}

export type { TButton }
