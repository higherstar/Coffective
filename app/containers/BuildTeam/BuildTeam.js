// @flow
import React from 'react'
import { ScrollView, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './BuildTeamStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {getCategories} from '../../reducers/buildTeam'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'

class BuildTeam extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('buildTeamTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  componentDidMount () {
    this.props.getCategories()
  }

  render () {
    const {navigation, categories} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.buildTeamBackground}
          />
        </View>
        <ScrollView style={s.content}>
          {categories.map((category, i) =>
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => navigation.navigate(category.screen)}
              style={s.item}
            >
              <View style={s.imageWrapper}>
                <Image
                  source={{uri: category.image}}
                  style={s.image}
                />
              </View>
              <View style={[s.row, i < categories.length - 1 && s.notLast]}>
                <Txt.View style={s.header} textStyle={s.headerText}>
                  {category.header}
                </Txt.View>
                <Txt.View style={s.description} textStyle={s.descriptionText}>
                  {category.description}
                </Txt.View>
                <View style={s.iconWrapper}>
                  <Icon
                    name='angle-right'
                    style={s.icon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.buildTeam,
})

const mapDispatchToProps = {
  getCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam)
