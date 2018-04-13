// @flow
import React from 'react'
import {Image, Linking, ScrollView, View} from 'react-native'
import {connect} from 'react-redux'
import {Card, Img, Label, List, Txt} from '../../components'
import s from './SupportItemStyles'
import {AppStyles, Images} from '../../themes'
import {BackButton} from '../../navigation/AppNavigation'
import m from 'moment'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Hours from './Hours'

class SupportItem extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: navigation.state.params.place.resource_type,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  render() {
    const {navigation} = this.props
    const {place} = navigation.state.params

    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.findSupportBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            bodyStyle={s.cardBody}
            cover={
              <Img source={place.banner_image ? {uri: place.banner_image} : Images.hospital} style={s.image}/>
            }
          >
            <View style={s.iconWrapper}>
              <Img
                source={{uri: place.icon}}
                style={s.icon}
              />
            </View>
            <Txt.View
              style={s.lastUpdate}
              textStyle={s.lastUpdateText}
            >
              {'Last Update'}: {m(place.modified).format('YYYY-MM-DD')}
            </Txt.View>
            <Card.Meta title={place.title.rendered} description={place.acf.description}/>
          </Card>
          {(!!place.acf.phone_number ||
            !!place.acf.fax ||
            !!place.acf.website
          ) && (
            <Card
              style={s.card}
              bodyStyle={s.cardBody}
              title={'Contact Information'}
            >
              <Label.Group>
                {place.acf.phone_number && (
                  <Label
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='phone'
                      />
                    }
                    label={'Phone'}
                    value={place.acf.phone_number}
                  />
                )}
                {place.acf.fax && (
                  <Label
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='print'
                      />
                    }
                    label={'Fax'}
                    value={place.acf.fax}
                  />
                )}
                {place.acf.website && (
                  <Label
                    prefix={
                      <Icon
                        style={s.websiteIcon}
                        name='open-in-new'
                      />
                    }
                    label={'WEBSITE'}
                    labelTextStyle={s.websiteText}
                    onClick={() => {
                      Linking.openURL(place.acf.website)
                    }}
                  />
                )}
              </Label.Group>
            </Card>
          )}
          {!!place.acf.clinic_hours && <Hours {...place.acf.clinic_hours}/>}
          {!!place.acf.language && (
            <Card
              style={s.card}
              bodyStyle={s.cardBody}
              title={'Additional Information'}
            >
              <Label.Group>
                {place.acf.language && (
                  <Label
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='language'
                      />
                    }
                    label={'Language'}
                    value={place.acf.language}
                  />
                )}
              </Label.Group>
            </Card>
          )}
          {!!place.acf.eligibility_requirements && (
            <Card
              style={s.card}
              bodyStyle={s.requirementsCardBody}
              title={'ELIGIBILITY REQUIREMENTS'}
            >
              <List
                iconName='circle'
                iconStyle={s.listItemIcon}
                titleTextStyle={s.listItemTitle}
                data={place.acf.eligibility_requirements}
                keyExtractor={(item, i) => i}
              />
            </Card>
          )}
          {!!place.acf.what_do_you_provide_services_to && (
            <Card
              style={s.card}
              bodyStyle={s.weServeCardBody}
              title={'WE SERVE'}
            >
              <List
                iconName='circle'
                iconStyle={s.listItemIcon}
                titleTextStyle={s.listItemTitle}
                data={place.acf.what_do_you_provide_services_to}
                keyExtractor={(item, i) => i}
                titleProp='label'
              />
            </Card>
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.findSupport,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SupportItem)
