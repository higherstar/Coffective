import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Card, Txt, Accordion } from '../../components'
import s from './ArticleStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

class Article extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: navigation.state.params.article.title.rendered,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  componentWillMount () {
  }

  render () {
    const {navigation} = this.props
    const {article, category} = navigation.state.params
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.checklistBackground}
          />
        </View>
        <ScrollView style={s.content}>
          <View style={s.scrollContent}>
            <Card
              style={s.card}
              cover={<Image source={Images.hospital}/>}
            >
              <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>{article.acf.introduction_title}</Txt.View>
              <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>{article.acf.introduction}</Txt.View>
              <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>{article.acf.how_it_works_title}</Txt.View>
              <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>
                {article.acf.how_it_works_introduction}
              </Txt.View>
            </Card>
            <Card
              style={s.card}
              actions={[<Button key='1' size='sm' outline type='primary'>LEARN MORE ABOUT WHY’S</Button>]}
            >
              <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>
                {article.acf.youll_love_title}
              </Txt.View>
              <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>
                {article.acf.youll_love_text}
              </Txt.View>
            </Card>
            <Txt.View style={s.sectionHeader} textStyle={s.sectionHeaderText}>
              {article.acf.faqs_title}
            </Txt.View>
            <Card
              style={s.card}
              cover={
                <Accordion
                  sections={article.acf.faqs}
                  headerProp='question'
                  descriptionProp='answer'
                />
              }
            />
          </View>
          <Button
            type='primary'
            size='lg'
            style={s.submit}
            onClick={() => navigation.goBack()}
          >
            {I18n.t('wantThis')}
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.checklist,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
