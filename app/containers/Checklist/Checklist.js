import React from 'react'
import { ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { getChecklist } from '../../reducers/checklist'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Link } from '../../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import s from './ChecklistStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
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
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('checklistTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  componentWillMount () {
    this.props.getChecklist()
  }

  render () {
    const { checklist } = this.props
    // TODO change Checkbox images
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.checklistBackground}
          />
        </View>
        <ScrollView style={s.content}>
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
                <Link
                  key={j}
                  style={j < group.items.length - 1 && s.notLast}
                  prefix={
                    <Checkbox
                      onClick={() => {}}
                      isChecked={item.checked}
                      checkBoxColor={'#00D6FF'}
                    />
                  }
                >
                  <Txt.View textStyle={[!item.checked && s.notChecked]}>
                    {item.header}
                  </Txt.View>
                </Link>
              )}
            </View>
          )}
        </ScrollView>
      </View>
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
