import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Card, Txt, Accordion, Carousel } from '../../components'
import s from './ArticleStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Color from 'color'

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
    // TODO set category color for header - change image
    // TODO fix images http => https
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
              cover={
                <View>
                  <Card.Meta title={article.acf.introduction_title} description={article.acf.introduction} bordered/>
                  <Card.Meta
                    title={article.acf.how_it_works_title}
                    description={article.acf.how_it_works_introduction}
                  />
                </View>
              }
            />
            <Card
              style={s.card}
              cover={
                <Carousel
                  style={s.carousel}
                  dotsStyle={s.dots}
                >
                  {article.acf.for_moms.map((item, i) =>
                    <View key={i} style={s.item}>
                      <Image source={{uri: item.formom_image.replace('http', 'https')}} style={s.itemImage}/>
                      <View style={s.itemDescriptionWrapper}>
                        <Txt.View
                          style={[s.itemIndex, {backgroundColor: Color(category.acf.color).fade(0.7)}]}
                          textStyle={[s.itemIndexText, {color: category.acf.color}]}
                        >
                          {i + 1}
                        </Txt.View>
                        <Txt.View style={s.itemDescription} textStyle={s.itemDescriptionText}>
                          {item.formom_description_text}
                        </Txt.View>
                      </View>
                    </View>
                  )}
                </Carousel>
              }
            />
            <Card
              style={s.card}
              cover={
                <Card.Meta title={article.acf.youll_love_title} description={article.acf.youll_love_text}/>
              }
              actions={[<Button key='1' size='sm' outline type='primary'>LEARN MORE ABOUT WHY’S</Button>]}
            />
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
