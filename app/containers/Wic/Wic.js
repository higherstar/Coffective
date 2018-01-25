// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Card, Button, List } from '../../components'
import s from './WicStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

// TODO
const listData = [
  {title: 'Preparing you for the hospital'},
  {title: 'Teach you how to breastfeed and learn about your baby'},
  {title: 'How to make breastfeeding work in your life'},
]

class Wic extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    title: I18n.t('wicTitle'),
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  componentWillMount () {
  }

  render () {
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.wicBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            cover={<Image source={Images.wic}/>}
            actions={[<Button key='1' size='sm' outline type='primary'>SEE IF YOU’RE ELIGIBLE</Button>]}
          >
            <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>{`What is WIC?`}</Txt.View>
            <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
          </Card>
          <Card style={s.card} title={'WIC Offers'}>
            <Txt.View textStyle={s.cardDescriptionText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
          </Card>
          <Card style={s.card} title={'WIC Providers'}>
            <Txt.View textStyle={s.cardDescriptionText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
            <List
              style={s.list}
              data={listData}
              keyExtractor={(item, index) => item.title}
              titleProp='title'
            />
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Wic)
