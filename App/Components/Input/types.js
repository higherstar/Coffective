// @flow
import React from 'react'

type TRFInput = {
  onChange: Function
}

type TInput = {
  style?: Object[] | Object,
  input: TRFInput,
  nextInput: ?React.Element<any>,
  onNextInputFocus: Function,
  onFocus: Function,
  size: string,
  icon: ?string,
  smartScroll?: Object,
  autoGrow: ?boolean
}

export type { TInput }
