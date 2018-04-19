// @flow
import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, Img, Input, Link, Select, Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './FindSupportStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import MapView, { Marker } from 'react-native-maps'
import { changeOrgType, changeZipCode, getPlaces } from '../../reducers/findSupport'
import m from 'moment'
import R from 'ramda'
import { MAP_STYLE, ORG_TYPES } from '../../constants'

const DEFAULT_PADDING = {top: 200, right: 25, bottom: 25, left: 25}

class FindSupport extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('findSupportTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  componentDidMount () {
    this.props.getPlaces()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.places && nextProps.places.length && !R.equals(nextProps.places, this.props.places)) {
      this.fitAllMarkers(nextProps.places)
    }
  }

  fitAllMarkers (places) {
    const markers = places.map(place => ({
      latitude: +place.acf.location.lat,
      longitude: +place.acf.location.lng,
    }))
    this.map.fitToCoordinates(markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    })
  }

  render () {
    const {getPlaces, places, orgType, changeOrgType, zipCode, changeZipCode, navigation} = this.props

    return (
      <KeyboardAvoidingView style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.findSupportBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent} keyboardShouldPersistTaps='handled'>
          <View style={[s.mapWrapper, places.length > 0 && s.hasPlaces]}>
            <MapView
              ref={ref => {
                this.map = ref
              }}
              customMapStyle={MAP_STYLE}
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
                >
                  {/*not working without View wrapper*/}
                  <View>
                    <Img
                      source={{uri: place.map_icon}}
                      style={s.placeImage}
                    />
                  </View>
                </Marker>
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
              items={ORG_TYPES}
              onValueChange={(item) => changeOrgType(item)}
              value={orgType}
              onDownArrow={() => this.zipCode.focus()}
            />
            <View style={s.actionsFooter}>
              <Input
                placeholder='Zip Code'
                style={s.zipInput}
                value={zipCode}
                onChangeText={changeZipCode}
                refField={(ref) => {
                  this.zipCode = ref
                }}
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
                    prefixStyle={s.placeImageWrapper}
                    prefix={
                      <Img
                        source={{uri: place.icon}}
                        style={s.placeImage}
                      />
                    }
                    onClick={() => navigation.navigate('SupportItem', {place})}
                  >
                    <Txt.View style={s.header} textStyle={s.headerText}>{place.title.rendered}</Txt.View>
                    <Txt.View
                      style={s.lastUpdate}
                      textStyle={s.lastUpdateText}
                    >
                      {'Last Update'}: {m(place.modified).format('YYYY-MM-DD')}
                    </Txt.View>
                    <Txt.View
                      style={s.description}
                      textStyle={s.descriptionText}
                    >
                      {place.acf.short_description}
                    </Txt.View>
                  </Link>
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.findSupport,
})

const mapDispatchToProps = {
  getPlaces,
  changeOrgType,
  changeZipCode,
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSupport)
