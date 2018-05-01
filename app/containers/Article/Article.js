import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Card, Txt, Accordion, Carousel, Link, Img } from '../../components'
import s from './ArticleStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Color from 'color'
import { checkItem } from '../../reducers/checklist'

const CarouselCard = ({items, imageProp, descriptionProp, color}) =>
  <Card
    style={s.card}
    cover={
      <Carousel
        style={s.carousel}
        dotsStyle={s.dots}
      >
        {items.map((item, i) =>
          <View key={i} style={s.item}>
            <Image source={{uri: item[imageProp]}} style={s.itemImage}/>
            <View style={s.itemDescriptionWrapper}>
              <Txt.View
                style={[s.itemIndex, {backgroundColor: Color(color).fade(0.7)}]}
                textStyle={[s.itemIndexText, {color: color}]}
              >
                {i + 1}
              </Txt.View>
              <Txt.View style={s.itemDescription} textStyle={s.itemDescriptionText}>
                {item[descriptionProp]}
              </Txt.View>
            </View>
          </View>
        )}
      </Carousel>
    }
  />

class Article extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: navigation.state.params.article.title.rendered,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  render () {
    const {navigation, checkItem} = this.props
    const {article, category, checked} = navigation.state.params
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.checklistItemBackground}
          />
          <View style={[s.overlay, {backgroundColor: Color(category.acf.color).fade(0.05)}]} />
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
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              removeArrow={true}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Img source={Images.article.for_mother} style={[s.sectionImage, {fill: category.acf.color}]}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE MOM'}
            </Link>
            {
              article.acf.for_moms ?
                <CarouselCard
                  items={article.acf.for_moms}
                  color={category.acf.color}
                  imageProp='formom_image'
                  descriptionProp='formom_description_text'
                /> : null
            }
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              removeArrow={true}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Img source={Images.article.for_baby} style={[s.sectionImage, {fill: category.acf.color}]}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE BABY'}
            </Link>
            {
              article.acf.for_baby ?
                <CarouselCard
                  items={article.acf.for_baby}
                  color={category.acf.color}
                  imageProp='forbaby_image'
                  descriptionProp='forbaby_description_text'
                /> : null
            }
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              removeArrow={true}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Img source={Images.article.for_champion} style={[s.sectionImage, {fill: category.acf.color}]}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE CHAMPION'}
            </Link>
            {
              article.acf.for_champion ?
                <CarouselCard
                  items={article.acf.for_champion}
                  color={category.acf.color}
                  imageProp='forchamp_image'
                  descriptionProp='forchamp_description_text'
                /> : null
            }
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
            {
              article.acf.faqs ?
                <Card
                  style={s.card}
                  cover={
                    <Accordion
                      sections={article.acf.faqs}
                      headerProp='question'
                      descriptionProp='answer'
                    />
                  }
                /> : null
            }
          </View>
          <Button
            type='primary'
            size='lg'
            style={s.submit}
            onClick={() => {
              checkItem({
                title: article.title.rendered,
                category: category.slug,
              })
              navigation.goBack()
            }}
          >
            {checked ? I18n.t('doNotWantThis') : I18n.t('wantThis')}
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.checklist,
})

const mapDispatchToProps = {
  checkItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
