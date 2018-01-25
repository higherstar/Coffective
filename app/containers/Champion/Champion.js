// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Card, Button } from '../../components'
import s from './ChampionStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

class Hospital extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    title: I18n.t('championTitle'),
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
            source={Images.championBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            title={'What to consider when choosing a Champion:'}
            cover={<Image source={Images.champion}/>}
          >
            <Txt.View textStyle={s.cardDescriptionText}>{`Being a new mom can be even more special when it’s shared with someone close. A “champion” is a person who supports you and stands up for you. They are with you before, during, and after your baby’s birth. This can be the baby’s dad, your partner, your mom, or someone else who cares about you and the baby.`}</Txt.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hospital)
