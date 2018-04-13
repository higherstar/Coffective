// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Txt } from '../'
import s from './DrawerStyles'
import { connect } from 'react-redux'
import ProgressCircle from 'react-native-progress/Circle'
import {Colors, Images} from '../../themes'
import {Img} from '../../components'

const Divider = () =>
  <View style={s.divider}/>

const DrawerItem = ({label, icon, onClick}) =>
  <TouchableOpacity activeOpacity={0.5} style={s.item} onPress={onClick}>
    <View style={s.iconWrapper}>
      <Img
        source={icon}
        style={s.icon}
      />
    </View>
    <Txt.View style={s.label} textStyle={s.labelText}>
      {label}
    </Txt.View>
  </TouchableOpacity>

class Drawer extends React.Component {
  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
    const {user} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.avatar}
            source={{uri: user.image}}
          />
          <View style={s.headerWrapper}>
            <Txt.View style={s.header} textStyle={s.headerText}>Hello Mom!</Txt.View>
            <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>40 Weeks to Go!</Txt.View>
          </View>
          <ProgressCircle
            size={64}
            progress={0.3}
            thickness={4}
            borderWidth={0}
            showsText
            formatText={() => [
              <Txt style={s.progressNumber} key='number'>
                40{'\n'}
              </Txt>,
              <Txt style={s.progressUnit} key='unit'>
                WEEKS
              </Txt>
            ]}
            textStyle={s.progressText}
            style={s.progress}
            color={Colors.white}
            unfilledColor={Colors.whiteMuted}
            direction='counter-clockwise'
          />
        </View>
        <ScrollView style={s.content}>
          <DrawerItem label={'Start Here'} onClick={() => this.navigate('HowItWorks')} icon={Images.menu.start_here}/>
          <DrawerItem label={'Checklist'} onClick={() => this.navigate('Checklist')} icon={Images.menu.checklist}/>
          <DrawerItem label={'Ask Questions'} onClick={() => this.navigate('Faq')} icon={Images.menu.ask_questions}/>
          <DrawerItem label={'Build Your Team'} onClick={() => this.navigate('BuildTeam')} icon={Images.menu.build_your_team}/>
          <DrawerItem label={'Find Support'} onClick={() => this.navigate('FindSupport')} icon={Images.menu.find_support}/>
          <Divider/>
          <DrawerItem label={'Settings'} onClick={() => this.navigate('Settings')} icon={Images.menu.settings}/>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
