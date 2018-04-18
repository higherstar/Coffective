// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Input, Txt } from '../../components'
import s from './FaqStyles'
import { getCommonQuestions } from '../../reducers/faq'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'

class Faq extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  componentDidMount () {
    this.props.getCommonQuestions()
  }

  render () {
    const {commonQuestions} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <View style={s.background}>
            <Image
              source={Images.faqBackground}
              style={s.backgroundImage}
            />
          </View>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('askQuestionsHeader')}
          </Txt.View>
          <Input
            style={s.search}
            name='search'
            placeholder={I18n.t('askQuestion')}
            returnKeyType='search'
            onChangeText={() => {}}
            suffix={
              <Icon
                name='search'
                style={s.searchIcon}
              />
            }
          />
        </View>
        <View style={s.contentWrapper}>
          <Txt.View style={s.commonQuestionsHeader} textStyle={s.commonQuestionsHeaderText}>
            {I18n.t('commonQuestions')}
          </Txt.View>
          <ScrollView style={s.content} keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag'>
            {commonQuestions.map((item, i) =>
              <TouchableOpacity key={i} activeOpacity={0.7} style={s.item}>
                <Txt.View style={s.itemHeader}>
                  {item.header}
                </Txt.View>
                <View style={s.iconWrapper}>
                  <Icon
                    name='angle-right'
                    style={s.icon}
                  />
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.faq,
})

const mapDispatchToProps = {
  getCommonQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
