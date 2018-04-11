// @flow
import React from 'react'
import {Image, ScrollView, View} from 'react-native'
import {connect} from 'react-redux'
import {Button, Input, Link, Select, Txt} from '../../components'
import I18n from 'react-native-i18n'
import s from './FindSupportStyles'
import {Images} from '../../themes'
import {DrawerButton} from '../../navigation/AppNavigation'
import MapView, {Marker} from 'react-native-maps'
import {getPlaces} from '../../reducers/findSupport'
import m from 'moment'
import R from 'ramda'

const DEFAULT_PADDING = {top: 200, right: 25, bottom: 25, left: 25}

class FindSupport extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('findSupportTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  constructor(props) {
    super(props)

    this.state = {
      orgType: null,
      orgTypes: [
        {
          label: 'Hospital',
          value: 'hospital',
        },
        {
          label: 'WIC',
          value: 'wic',
        },
        {
          label: 'Home Visiting Program',
          value: 'home_visiting_program',
        },
        {
          label: 'Community Breastfeeding Support Organization',
          value: 'community_breastfeeding_support',
        },
        {
          label: 'Advocacy',
          value: 'advocacy',
        },
        {
          label: 'OB/GYN',
          value: 'ob_gyn',
        },
        {
          label: 'Prenatal Health Clinic',
          value: 'prenatal_health_clinic',
        },
        {
          label: 'Breastfeeding Coalition',
          value: 'breastfeeding_coalition',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.places && !R.equals(nextProps.places, this.props.places)) {
      this.fitAllMarkers(nextProps.places)
    }
  }

  fitAllMarkers(places) {
    const markers = places.map(place => ({
      latitude: +place.acf.location.lat,
      longitude: +place.acf.location.lng,
    }))
    this.map.fitToCoordinates(markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    })
  }


  render() {
    const {orgType, orgTypes} = this.state
    const {getPlaces, places} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.findSupportBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <View style={[s.mapWrapper, places.length > 0 && s.hasPlaces]}>
            <MapView
              ref={ref => {
                this.map = ref
              }}
              style={s.map}
            >
              {places.map((place, i) => (
                <Marker
                  key={i}
                  coordinate={{
                    latitude: +place.acf.location.lat,
                    longitude: +place.acf.location.lng,
                  }}
                  title={place.title.rendered}
                  description={place.acf.location.address}
                />
              ))}
            </MapView>
          </View>
          <View style={s.actions}>
            <Select
              style={{
                viewContainer: s.orgTypeSelect
              }}
              placeholder={{
                label: 'Organization Type',
                value: '',
              }}
              items={orgTypes}
              onValueChange={(item) => {
                this.setState({
                  orgType: item.value,
                })
              }}
              value={orgType}
            />
            <View style={s.actionsFooter}>
              <Input
                placeholder='Zip Code'
                style={s.zipInput}
              />
              <Button
                type='primary'
                size='md'
                style={s.goBtn}
                onClick={getPlaces}
              >
                {I18n.t('go')}
              </Button>
            </View>
          </View>
          {places.length > 0 && (
            <View style={s.placesWrapper}>
              <Txt.View style={s.placesHeader} textStyle={s.placesHeaderText}>{'LEARN MORE AT:'}</Txt.View>
              <View style={s.places}>
                {places.map((place, i) =>
                  <Link
                    key={i}
                    style={s.placeLink}
                    contentStyle={s.placeLinkContent}
                    prefix={
                      <View style={s.placeImageWrapper}>
                        <Image
                          source={{uri: 'https://dummyimage.com/60x60'}}
                          style={s.placeImage}
                        />
                      </View>
                    }
                  >
                    <Txt.View style={s.header} textStyle={s.headerText}>{place.title.rendered}</Txt.View>
                    <Txt.View style={s.lastUpdate}
                              textStyle={s.lastUpdateText}>{'Last Update'}: {m(place.modified).format('YYYY-YY-DD')}</Txt.View>
                    <Txt.View style={s.description}
                              textStyle={s.descriptionText}>{place.acf.short_description}</Txt.View>
                  </Link>
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.findSupport,
})

const mapDispatchToProps = {
  getPlaces,
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSupport)
