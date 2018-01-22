// @flow
import React from 'react'
import { ScrollView, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Txt, Input, Button } from '../../components'
import I18n from 'react-native-i18n'
import s from './FindSupportStyles'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
// import MapView from 'react-native-maps'

class FindSupport extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: I18n.t('findSupportTitle'),
    headerLeft: (
      <DrawerButton navigation={navigation}/>
    )
  })

  render () {
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.findSupportBackground}
          />
        </View>
        <View style={s.content}>
          {/*<View>*/}
            {/*<Input/>*/}
          {/*</View>*/}
          {/*<View>*/}
            {/*<Input/>*/}
            {/*<Button type='primary'>{I18n.t('go')}</Button>*/}
          {/*</View>*/}
          <View style={s.mapWrapper}>
            {/*<MapView*/}
              {/*style={s.map}*/}
              {/*initialRegion={{*/}
                {/*latitude: 37.78825,*/}
                {/*longitude: -122.4324,*/}
                {/*latitudeDelta: 0.0922,*/}
                {/*longitudeDelta: 0.0421,*/}
              {/*}}*/}
            {/*/>*/}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.findSupport,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSupport)
