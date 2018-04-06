import React from 'react'
import { ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { getCategories, getArticles } from '../../reducers/checklist'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Link } from '../../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import s from './ChecklistStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import Checkbox from 'react-native-check-box'
import Color from 'color'

class Checklist extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('checklistTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  componentDidMount () {
    this.props.getCategories()
    this.props.getArticles()
  }

  render () {
    const { categories, articles, navigation } = this.props
    // TODO image for category - no backend image
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.checklistBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          {categories.map((category, i) => {
            const categoryArticles = articles.filter(item => item.learn_categories.includes(category.id))
            return categoryArticles.length ? (
              <View key={i} style={s.category}>
                <View style={[s.categoryHead, {backgroundColor: Color(category.acf.color).fade(0.7)}]}>
                  <TouchableOpacity activeOpacity={0.7} style={s.categoryIconWrapper}>
                    <Icon
                      style={[s.categoryIcon, {color: category.acf.color}]}
                      name='question-circle'
                    />
                  </TouchableOpacity>
                  <Txt.View
                    style={s.categoryName}
                    textStyle={[s.categoryNameText, { color: category.acf.color }]}
                  >
                    {category.name.toUpperCase()}
                  </Txt.View>
                  {/*<Image*/}
                  {/*source={{uri: category.image}}*/}
                  {/*style={s.categoryImage}*/}
                  {/*/>*/}
                </View>
                {categoryArticles.map((article, j) =>
                  <Link
                    prefixType='checkbox'
                    key={j}
                    prefix={
                      <Checkbox
                        onClick={() => {}}
                        isChecked={article.checked}
                        checkBoxColor={'#00D6FF'}
                      />
                    }
                    onClick={() => navigation.navigate('Article', {article, category})}
                    textStyle={[!article.checked && s.notChecked]}
                  >
                    {article.title.rendered}
                  </Link>
                )}
              </View>
            ) : null
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.checklist,
})

const mapDispatchToProps = {
  getCategories,
  getArticles,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
