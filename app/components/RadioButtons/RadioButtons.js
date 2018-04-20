// @flow
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Img, Txt } from '../'
import s from './RadioButtonsStyles'
import { RadioButtons as Radio } from 'react-native-radio-buttons'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { AppStyles, Images } from '../../themes'

/*
* TODO Package is deprecated now
* https://github.com/ArnaudRinquin/react-native-radio-buttons
* */

class RadioButtons extends React.Component {
  static defaultProps = {}

  render () {
    const {style, ...props} = this.props
    return (
      <Radio
        renderContainer={(children) => <View style={style}>{children}</View>}
        renderOption={(option, selected, onSelect, index) =>
          <TouchableOpacity style={s.optionWrapper} activeOpacity={1} onPress={onSelect} key={index}>
            <View style={s.option}>
              <Img source={Images.states[option.icon]} style={s.icon}/>
              <Txt>{option.label}</Txt>
            </View>
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
