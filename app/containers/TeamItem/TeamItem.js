// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, Img, List, Txt } from '../../components'
import s from './TeamItemStyles'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

class TeamItem extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: navigation.state.params.category.title.rendered,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  render () {
    const {navigation} = this.props
    const {category} = navigation.state.params

    const actions = {
      'choose-your-hospital': [
        <Button
          key='1'
          size='sm'
          outline
          type='primary'
          onClick={() => navigation.navigate('FindSupport')}
        >
          See hospitals in your area
        </Button>
      ],
    }

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
            cover={<Img style={s.image} source={{uri: category.acf.top_banner}}/>}
            actions={actions[category.slug] || []}
          >
            <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>{category.acf.top_heading}</Txt.View>
            <Txt.View style={s.cardDescription} textStyle={s.cardDescriptionText}>
              {category.acf.basic_information}
            </Txt.View>
          </Card>
          {!!category.acf.wic_offers && (
            <Card style={s.card} title={'WIC Offers'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_offers}</Txt.View>
            </Card>
          )}
          {!!category.acf.wic_provides && (
            <Card style={s.card} title={'WIC Providers'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_provides}</Txt.View>
              <List
                style={s.list}
                data={category.acf.wic_provides_list}
                keyExtractor={(item, i) => i}
                titleProp='line'
              />
            </Card>
          )}
          {!!category.acf.wic_at_work && (
            <Card style={s.card} title={'WIC at Work'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_at_work}</Txt.View>
              <List
                style={s.list}
                data={category.acf.wic_at_work_list}
                keyExtractor={(item, i) => i}
                titleProp='line'
              />
            </Card>
          )}
          {!!category.acf.list && (
            <Card style={s.card} title={category.acf.list_title[0].title}>
              <List
                style={s.list}
                data={category.acf.list}
                keyExtractor={(item, i) => i}
                titleProp='line'
              />
            </Card>
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamItem)
