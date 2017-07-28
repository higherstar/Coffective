// @flow

import React, { Component } from 'react'
import { Animated, Modal, Picker, Platform, Text, TouchableHighlight, View } from 'react-native'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import I18n from 'react-native-i18n'
import { Button } from '../'
import s from './styles'

function getItemIndex (array: Array<string>, item: string) {
  return array.indexOf(item)
}

type Props = {
  options: Array<string>,
  defaultOption: string,
  disabled: boolean,
  onSelect: Function,
  style: Object
}

type State = {
  modalVisible: boolean,
  animatedHeight: Function,
  selectedOption: number,
  confirmedOption: number
}

class Select extends Component {
  state: State
  props: Props

  constructor (props: Object) {
    super(props)
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      selectedOption: null,
      confirmedOption: null
    }
  }

  componentWillReceiveProps (nextProps: Object) {
    const {defaultOption, options} = nextProps
    const newOption = getItemIndex(options, defaultOption)
    if (defaultOption) {
      this.setState({
        confirmedOption: newOption,
        selectedOption: newOption
      })
    }
  }

  setModalVisible = (visible: boolean) => {
    // slide animation
    if (visible) {
      this.setState({
        modalVisible: visible
      })

      Animated.timing(
        this.state.animatedHeight,
        {
          toValue: 260,
          // slide animation duration time, default to 300ms, IOS only
          duration: 300
        }
      ).start()
    } else {
      this.setState({
        modalVisible: visible,
        animatedHeight: new Animated.Value(0)
      })
    }
  }

  onValueChange (selectedOption: number) {
    this.setState({
      selectedOption
    }, () => {
      if (Platform.OS === 'android') {
        this.optionSelected()
      }
    })
  }

  onRequestCloseModal = () => {
    return () => {
      this.setState(prevState => {
        return {selectedOption: prevState.confirmedOption}
      }, () => {
        this.setModalVisible(false)
      })
    }
  }

  onPressSelectField = () => {
    dismissKeyboard()
    const {disabled} = this.props
    if (disabled) {
      return true
    }
    if (Platform.OS === 'ios') {
      this.setModalVisible(true)
    }
  }

  optionSelected = () => {
    const {onSelect, options} = this.props
    this.setState(prevState => {
      return {confirmedOption: prevState.selectedOption}
    }, () => {
      const selectedOption = options[this.state.selectedOption]
      onSelect(selectedOption)
      this.setModalVisible(false)
    })
  }

  shouldValueChange = (value: number) => {
    if (this.state.selectedOption !== value) {
      this.onValueChange(value)
    }
  }

  render () {
    const {animatedHeight, modalVisible, confirmedOption, selectedOption} = this.state
    const {style, options, disabled, placeholder = ''} = this.props
    return (
      <TouchableHighlight
        activeOpacity={disabled && 1 || 0.2}
        style={[s.selectContainer, style]}
        underlayColor={'transparent'}
        onPress={this.onPressSelectField}
      >
        <View>
          {Platform.OS === 'ios' && (
            <View>
              <View>
                <Text style={s.selectedOptionText}>
                  {options[confirmedOption] || placeholder }
                </Text>
              </View>
              <Modal
                transparent
                visible={modalVisible}
                onRequestClose={this.onRequestCloseModal}
              >
                <TouchableHighlight
                  style={s.selectMask}
                  activeOpacity={1}
                  underlayColor={'#00000077'}
                  onPress={this.onRequestCloseModal()}
                >
                  <TouchableHighlight style={{flex: 1}}>
                    <Animated.View style={[s.selectWrapper, {height: animatedHeight}]}>
                      <View style={s.headerActions}>
                        <Button
                          style={s.cancelBtn}
                          textStyle={s.cancelText}
                          btnType='link'
                          onPress={this.onRequestCloseModal()}
                          uppercase={false}
                        >
                          {I18n.t('cancel')}
                        </Button>
                        <Button
                          style={s.confirmBtn}
                          textStyle={s.confirmText}
                          btnType='link'
                          onPress={this.optionSelected}
                          uppercase={false}
                        >
                          {I18n.t('confirm')}
                        </Button>
                      </View>
                      <Picker
                        selectedValue={selectedOption}
                        onValueChange={this.shouldValueChange}
                        enabled={!disabled}>
                        {options.map((option) => (
                            <Picker.Item
                              label={option.toString()}
                              value={getItemIndex(options, option)}
                              key={getItemIndex(options, option)}
                            />
                          )
                        )}
                      </Picker>
                    </Animated.View>
                  </TouchableHighlight>
                </TouchableHighlight>
              </Modal>
            </View>
          ) || (
            <Picker
              selectedValue={selectedOption}
              onValueChange={this.shouldValueChange}
              style={s.picker}
              enabled={!disabled}
              mode='dropdown'>
              {options.map((option, index) =>
                <Picker.Item
                  label={option.toString()}
                  value={getItemIndex(options, option)}
                  key={index}
                />
              )}
            </Picker>)
          }
        </View>
      </TouchableHighlight>
    )
  }
}

export default Select