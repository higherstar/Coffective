import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Card, Txt, Accordion, Carousel, Link } from '../../components'
import s from './ArticleStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Color from 'color'

// TODO fix images http => https
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
            <Image source={{uri: item[imageProp].replace('http', 'https')}} style={s.itemImage}/>
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
    const {navigation} = this.props
    const {article, category} = navigation.state.params
    // TODO set category color for header - change image
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
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Image source={{uri: 'https://dummyimage.com/60x60'}} style={s.sectionImage}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE MOM'}
            </Link>
            <CarouselCard
              items={article.acf.for_moms}
              color={category.acf.color}
              imageProp='formom_image'
              descriptionProp='formom_description_text'
            />
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Image source={{uri: 'https://dummyimage.com/60x60'}} style={s.sectionImage}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE BABY'}
            </Link>
            <CarouselCard
              items={article.acf.for_baby}
              color={category.acf.color}
              imageProp='forbaby_image'
              descriptionProp='forbaby_description_text'
            />
            <Link
              style={s.sectionLink}
              textStyle={[s.sectionLinkText, {color: category.acf.color}]}
              iconColor={category.acf.color}
              prefix={
                <View style={s.sectionImageWrapper}>
                  <Image source={{uri: 'https://dummyimage.com/60x60'}} style={s.sectionImage}/>
                </View>
              }
            >
              {'SEE HOW IT WORKS\nFOR THE CHAMPION'}
            </Link>
            <CarouselCard
              items={article.acf.for_champion}
              color={category.acf.color}
              imageProp='forchamp_image'
              descriptionProp='forchamp_description_text'
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
