import React from 'react'
import { ScrollView, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Txt, Img } from '../../components'
import I18n from 'react-native-i18n'
import s from './BuildTeamStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { getCategories } from '../../reducers/buildTeam'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import Spinner from 'react-native-loading-spinner-overlay'

class BuildTeam extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: null,
    headerTitle: I18n.t('buildTeamTitle'),
    headerLeft: <DrawerButton navigation={navigation} />
  })

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { navigation, categories, loading } = this.props
    // console.log(categories)

    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.buildTeamBackground}
          />
        </View>
        <ScrollView style={s.content}>
          {categories.map((category, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(
                  category.slug === 'choose-your-champion'
                    ? 'Champion'
                    : 'TeamItem',
                  { category }
                )
              }
              style={s.item}>
              <View style={s.imageWrapper}>
                <Img source={{ uri: category.acf.icon }} style={s.image} />
              </View>
              <View style={[s.row, i < categories.length - 1 && s.notLast]}>
                <Txt.View style={s.header} textStyle={s.headerText}>
                  {category.title.rendered}
                </Txt.View>
                <Txt.View style={s.description} textStyle={s.descriptionText}>
                  {category.acf.short_description}
                </Txt.View>
                <View style={s.iconWrapper}>
                  <Icon name="angle-right" style={s.icon} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Spinner visible={loading && !categories.length} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.buildTeam
})

const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam)
