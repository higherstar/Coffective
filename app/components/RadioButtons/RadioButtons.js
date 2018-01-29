// @flow
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Txt } from '../'
import s from './RadioButtonsStyles'
import { RadioButtons as Radio } from 'react-native-radio-buttons'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { AppStyles } from '../../themes'

class RadioButtons extends React.Component {
  static defaultProps = {
  }

  render () {
    const {style, ...props} = this.props
    return (
      <Radio
        renderContainer={(children) => <View style={style}>{children}</View>}
        renderOption={(option, selected, onSelect, index) =>
          <TouchableOpacity style={s.option} activeOpacity={1} onPress={onSelect} key={index}>
            <Txt.View>{option}</Txt.View>
            {selected && (
              <Icon
                style={AppStyles.radioOptionIcon}
                name='check'
              />
            )}
          </TouchableOpacity>
        }
        {...props}
      />
    )
  }
}

export default RadioButtons
