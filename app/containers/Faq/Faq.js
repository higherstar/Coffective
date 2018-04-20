// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Accordion, Input, Txt } from '../../components'
import s from './FaqStyles'
import { getQuestions } from '../../reducers/faq'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import debounce from 'lodash/debounce'

class Faq extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  constructor (props) {
    super(props)
    this.state = {
      search: undefined,
    }

    this.getQuestions = debounce(this.props.getQuestions, 800)
  }

  componentDidMount () {
    this.props.getQuestions()
  }

  handleChangeSearch = (search) => {
    this.setState({search})
    this.getQuestions({search})
  }

  render () {
    const {questions} = this.props
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
            focus
            name='search'
            placeholder={I18n.t('askQuestion')}
            returnKeyType='search'
            onChangeText={this.handleChangeSearch}
            suffix={
              <Icon
                name='search'
                style={s.searchIcon}
              />
            }
          />
        </View>
        <View style={s.contentWrapper}>
          <Txt.View style={s.questionsHeader} textStyle={s.questionsHeaderText}>
            {I18n.t('commonQuestions')}
          </Txt.View>
          <ScrollView style={s.content} keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag'>
            <View style={s.questions}>
              <Accordion
                sections={questions}
                headerProp='title.rendered'
                descriptionProp='acf.answer'
                icon={
                  <Icon
                    name='angle-right'
                    style={s.icon}
                  />
                }
              />
            </View>
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
  getQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
