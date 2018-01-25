// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Card } from '../../components'
import s from './WicStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

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
        <ScrollView style={s.content}>
          <Card style={s.card} title={'WIC Offers'}>
            <Txt.View textStyle={s.cardText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
          </Card>
          <Card style={s.card} title={'WIC Providers'}>
            <Txt.View textStyle={s.cardText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
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
