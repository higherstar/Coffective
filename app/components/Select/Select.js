import React, {PureComponent} from 'react'
import {Modal, Picker, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native'
import R from 'ramda'
import s from './SelectStyles'
import {Colors} from '../../themes'

/*
* https://github.com/lawnstarter/react-native-picker-select
* TODO refactor this component
* */

export default class Select extends PureComponent {
  constructor(props) {
    super(props)

    this.noPlaceholder = R.equals(props.placeholder, {})
    this.items = this.noPlaceholder ? props.items : [props.placeholder].concat(props.items)

    this.state = {
      items: this.items,
      selectedItem: this.items.find(item => R.equals(item.value, props.value)) || this.items[0],
      showPicker: false,
      animationType: undefined,
    }

    this.onUpArrow = this.onUpArrow.bind(this)
    this.onDownArrow = this.onDownArrow.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.togglePicker = this.togglePicker.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // update items if items prop changes
    if (!R.equals(this.state.items, nextProps.items)) {
      this.setState({
        items: this.noPlaceholder ? nextProps.items : [this.props.placeholder].concat(nextProps.items),
      })
    }

    // update selectedItem if value prop is defined and differs from currently selected item
    if (nextProps.value === undefined) {
      return
    }
    const newSelectedItem = this.state.items.find(item => R.equals(item.value, nextProps.value)) || this.items[0]
    if (this.state.selectedItem !== newSelectedItem) {
      this.setState({
        selectedItem: newSelectedItem,
      })
    }
  }

  onUpArrow() {
    this.togglePicker()
    setTimeout(() => {
      this.props.onUpArrow()
    })
  }

  onDownArrow() {
    this.togglePicker()
    setTimeout(() => {
      this.props.onDownArrow()
    })
  }

  onValueChange(value, index) {
    this.props.onValueChange(value, index)

    this.setState({
      selectedItem: this.state.items[index],
    })
  }

  togglePicker(animate = false) {
    if (this.props.disabled) {
      return
    }
    this.setState({
      animationType: animate ? 'slide' : undefined,
      showPicker: !this.state.showPicker,
    })
    if (!this.state.showPicker && this.inputRef) {
      this.inputRef.focus()
      this.inputRef.blur()
    }
  }

  renderPickerItems() {
    return this.state.items.map(item => (
      <Picker.Item label={item.label} value={item.value} key={item.key || item.label}/>))
  }

  renderPlaceholderStyle() {
    const styleModifiers = {}
    if (!this.noPlaceholder && this.state.selectedItem.label === this.props.placeholder.label) {
      styleModifiers.color = this.props.style.placeholderTextColor || Colors.inputPlaceholder
    }
    return styleModifiers
  }

  renderDoneBar() {
    if (this.props.hideDoneBar) {
      return null
    }

    return (
      <View style={[s.modalViewMiddle, this.props.style.modalViewMiddle]}>
        <View style={{flex: 1, flexDirection: 'row', marginLeft: 15}}>
          <TouchableOpacity
            activeOpacity={this.props.onUpArrow ? 0.5 : 1}
            onPress={this.props.onUpArrow ? this.onUpArrow : null}
          >
            <View style={[s.chevron, s.chevronUp, this.props.onUpArrow ? s.chevronActive : {}]}/>
          </TouchableOpacity>
          <View style={{marginHorizontal: 10}}/>
          <TouchableOpacity
            activeOpacity={this.props.onDownArrow ? 0.5 : 1}
            onPress={this.props.onDownArrow ? this.onDownArrow : null}
          >
            <View style={[s.chevron, s.chevronDown, this.props.onDownArrow ? s.chevronActive : {}]}/>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.togglePicker(true)
          }}
          hitSlop={{top: 2, right: 2, bottom: 2, left: 2}}
        >
          <View>
            <Text style={s.done}>Done</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  renderIcon() {
    if (this.props.hideIcon) {
      return null
    }

    return (
      <View style={[s.icon, this.props.style.icon]}/>
    )
  }

  renderTextInputOrChildren() {
    if (this.props.children) {
      return (
        <View pointerEvents="box-only">
          {this.props.children}
        </View>
      )
    }
    return (
      <View pointerEvents="box-only">
        <TextInput
          style={[s.input, this.props.style.inputIOS, this.renderPlaceholderStyle()]}
          value={this.state.selectedItem.label}
          placeholderTextColor={Colors.inputPlaceholder}
          ref={(ref) => {
            this.inputRef = ref
          }}
        />
        {this.renderIcon()}
      </View>
    )
  }

  renderIOS() {
    return (
      <View style={[s.viewContainer, this.props.style.viewContainer]}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.togglePicker(true)
          }}
        >
          {this.renderTextInputOrChildren()}
        </TouchableWithoutFeedback>
        <Modal
          visible={this.state.showPicker}
          transparent
          animationType={this.state.animationType}
        >
          <TouchableOpacity
            style={[s.modalViewTop, this.props.style.modalViewTop]}
            onPress={() => {
              this.togglePicker(true)
            }}
          />
          {this.renderDoneBar()}
          <View style={[s.modalViewBottom, this.props.style.modalViewBottom]}>
            <Picker
              onValueChange={this.onValueChange}
              selectedValue={this.state.selectedItem.value}
              testId="RNPickerSelectIOS"
            >
              {this.renderPickerItems()}
            </Picker>
          </View>
        </Modal>
      </View>
    )
  }

  renderAndroidHeadless() {
    return (
      <View style={{borderWidth: 0}}>
        {this.props.children}
        <Picker
          style={{position: 'absolute', top: 0, width: 1000, height: 1000}}
          onValueChange={this.onValueChange}
          selectedValue={this.state.selectedItem.value}
          testId="RNPickerSelectAndroid"
          mode={this.props.mode}
          enabled={!this.props.disabled}
        >
          {this.renderPickerItems()}
        </Picker>
      </View>
    )
  }

  renderAndroid() {
    if (this.props.children) {
      return this.renderAndroidHeadless()
    }

    return (
      <View style={[s.viewContainer, this.props.style.viewContainer]}>
        <Picker
          style={[s.input, this.props.style.inputAndroid, this.renderPlaceholderStyle()]}
          onValueChange={this.onValueChange}
          selectedValue={this.state.selectedItem.value}
          testId="RNPickerSelectAndroid"
          mode={this.props.mode}
          enabled={!this.props.disabled}
        >
          {this.renderPickerItems()}
        </Picker>
        <View style={[s.underline, this.props.style.underline]}/>
      </View>
    )
  }

  render() {
    return Platform.OS === 'ios' ? this.renderIOS() : this.renderAndroid()
  }
}

// Select.propTypes = {
//   onValueChange: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     value: PropTypes.any.isRequired,
//     key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   })).isRequired,
//   placeholder: PropTypes.shape({
//     label: PropTypes.string,
//     value: PropTypes.any,
//   }),
//   hideDoneBar: PropTypes.bool,
//   hideIcon: PropTypes.bool,
//   disabled: PropTypes.bool,
//   value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
//   style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
//   mode: PropTypes.string,
//   onUpArrow: PropTypes.func,
//   onDownArrow: PropTypes.func,
// };

Select.defaultProps = {
  placeholder: {
    label: 'Select an item...',
    value: null,
  },
  hideDoneBar: false,
  hideIcon: false,
  disabled: false,
  value: undefined,
  style: {},
  children: null,
  mode: 'dialog',
  onUpArrow: null,
  onDownArrow: null,
}
