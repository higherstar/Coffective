import React from 'react'
import { ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { getChecklist } from '../../reducers/checklist'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt } from '../../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import s from './ChecklistStyles'
import Checkbox from 'react-native-check-box'

// TODO move to constants
const colors = [
  '#C08C5C',
  '#F176AF',
  '#B5AAEF',
  '#EDBEA4',
  '#E8CD79',
  '#A8CEA5',
]

const colors2 = [
  '#F1E7DE',
  '#FFF0F7',
  '#F5F4FC',
  '#FFFAF7',
  '#FBF7EB',
  '#EAFBE9',
]

class Checklist extends React.Component {
  static navigationOptions = {
    title: I18n.t('checklistTitle'),
  }

  componentWillMount () {
    this.props.getChecklist()
  }

  render () {
    const { checklist } = this.props
    // TODO change Checkbox images
    return (
      <ScrollView style={s.container}>
        {checklist.map((group, i) =>
          <View key={i} style={s.group}>
            <View style={[s.groupHead, {backgroundColor: colors2[i]}]}>
              <TouchableOpacity activeOpacity={0.7} style={s.groupIconWrapper}>
                <Icon
                  style={[s.groupIcon, {color: colors[i]}]}
                  name='question-circle'
                />
              </TouchableOpacity>
              <Txt.View
                style={s.groupName}
                textStyle={[s.groupNameText, { color: colors[i] }]}
              >
                {group.header.toUpperCase()}
                </Txt.View>
              <Image
                source={{uri: group.image}}
                style={s.groupImage}
              />
            </View>
            {group.items.map((item, j) =>
              <View key={j} style={[s.item, j < group.items.length - 1 && s.notLast]}>
                <Checkbox
                  style={s.itemCheckbox}
                  onClick={()=> {}}
                  isChecked={item.checked}
                  checkBoxColor={'#00D6FF'}
                />
                <TouchableOpacity activeOpacity={0.7} style={s.itemLink} onPress={() => {}}>
                  <Txt.View style={s.itemName} textStyle={[s.itemNameText, !item.checked && s.itemNotChecked]}>
                    {item.header}
                  </Txt.View>
                  <Icon
                    style={s.itemIcon}
                    name='angle-right'
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.checklist,
})

const mapDispatchToProps = {
  getChecklist,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
