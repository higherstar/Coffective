// @flow
import React from 'react'
import {Image, View} from 'react-native'
import {connect} from 'react-redux'
import {Button, Input, Select} from '../../components'
import I18n from 'react-native-i18n'
import s from './FindSupportStyles'
import {Images} from '../../themes'
import {DrawerButton} from '../../navigation/AppNavigation'
import MapView from 'react-native-maps'

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

  render() {
    const {orgType, orgTypes} = this.state
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.findSupportBackground}
          />
        </View>
        <View style={s.content}>

          <View style={s.mapWrapper}>
            <MapView
              style={s.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
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
              >
                {I18n.t('go')}
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.findSupport,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FindSupport)
