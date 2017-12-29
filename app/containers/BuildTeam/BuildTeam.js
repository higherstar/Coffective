// @flow
import React from 'react'
import { ScrollView, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './BuildTeamStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {getCategories} from '../../reducers/buildTeam'

class BuildTeam extends React.Component {
  static navigationOptions = {
    title: I18n.t('buildTeamTitle')
  }

  componentWillMount () {
    this.props.getCategories()
  }

  render () {
    const {navigation, categories} = this.props
    // TODO add small carousel
    return (
      <ScrollView style={s.container}>
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
            <View style={[s.content, i < categories.length - 1 && s.notLast]}>
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
