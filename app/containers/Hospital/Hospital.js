// @flow
import React from 'react'
import { Image, ScrollView, View, FlatList } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Card, Button } from '../../components'
import s from './HospitalStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// TODO
const listData = [
  {title: 'Ask your doctor about what to expect'},
  {title: 'Take a tour of the hospital'},
  {title: 'Attend a hospital prenatal class'},
  {title: 'Let hospital staff know you are prepared to receive the practices on the checklist'},
]

class Hospital extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    title: I18n.t('hospitalTitle'),
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
            source={Images.hospitalBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            cover={<Image source={Images.hospital}/>}
            actions={[<Button key='1' size='sm' outline type='primary'>See hospitals in your area</Button>]}
          >
            <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>{`What to consider when choosing a hospital:`}</Txt.View>
            <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>{`Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Txt.View>
            <FlatList
              style={s.list}
              data={listData}
              keyExtractor={(item, index) => item.title}
              renderItem={({item}) => (
                <View style={s.item}>
                  <Icon style={s.itemIcon} name='check-circle'/>
                  <Txt.View style={s.itemTitle} textStyle={s.itemTitleText}>{item.title}</Txt.View>
                </View>
              )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Hospital)
