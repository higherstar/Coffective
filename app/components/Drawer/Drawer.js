// @flow
import React from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import moment from 'moment'
import { Txt } from '../'
import s from './DrawerStyles'
import { connect } from 'react-redux'
import ProgressCircle from 'react-native-progress/Circle'
import { Colors, Images } from '../../themes'
import { Img } from '../../components'

const Divider = () => <View style={s.divider} />

const DrawerItem = ({ label, icon, onClick }) => (
  <TouchableOpacity activeOpacity={0.5} style={s.item} onPress={onClick}>
    <View style={s.iconWrapper}>
      <Img source={icon} style={s.icon} type={'offline'} />
    </View>
    <Txt.View style={s.label} textStyle={s.labelText}>
      {label}
    </Txt.View>
  </TouchableOpacity>
)

class Drawer extends React.Component {
  navigate = screen => {
    this.props.navigation.navigate(screen)
  }

  render() {
    const { user } = this.props
    let weeks = 40
    if (user && user.acf.expecting) {
      let reg_date = moment(user.registration_date)
      let today = moment(new Date())
      weeks = 41 - parseInt(user.acf.expecting) - today.diff(reg_date, 'weeks')
    }
    return (
      <View style={s.container}>
        {!!user && (
          <View style={s.head}>
            <View style={s.headerWrapper}>
              <Txt.View style={s.header} textStyle={s.headerText}>
                Hello {user.name}!
              </Txt.View>
              {user && user.acf.expecting ? (
                <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>
                  {weeks} Weeks to Go!
                </Txt.View>
              ) : (
                <Text></Text>
              )}
            </View>
            {user && user.acf.expecting ? (
              <ProgressCircle
                size={64}
                progress={0.3}
                thickness={4}
                borderWidth={0}
                showsText
                formatText={() => [
                  <Txt style={s.progressNumber} key='number'>
                    {weeks}
                    {'\n'}
                  </Txt>,
                  <Txt style={s.progressUnit} key='unit'>
                    WEEKS
                  </Txt>,
                ]}
                textStyle={s.progressText}
                style={s.progress}
                color={Colors.white}
                unfilledColor={Colors.whiteMuted}
                direction='counter-clockwise'
              />
            ) : (
              <Text></Text>
            )}
          </View>
        )}
        <ScrollView style={s.content}>
          <DrawerItem label={'Home'} onClick={() => this.navigate('Home')} icon={Images.menu.home} />
          <DrawerItem label={'Start Here'} onClick={() => this.navigate('HowItWorks')} icon={Images.menu.start_here} />
          <DrawerItem label={'Checklist'} onClick={() => this.navigate('Checklist')} icon={Images.menu.checklist} />
          {/*<DrawerItem label={'Ask Questions'} onClick={() => this.navigate('Faq')} icon={Images.menu.ask_questions}/>*/}
          <DrawerItem
            label={'Build Your Team'}
            onClick={() => this.navigate('BuildTeam')}
            icon={Images.menu.build_your_team}
          />
          <DrawerItem
            label={'Find Support'}
            onClick={() => this.navigate('FindSupport')}
            icon={Images.menu.find_support}
          />
          {/*<Divider/>*/}
          {/*<DrawerItem label={'Settings'} onClick={() => this.navigate('Settings')} icon={Images.menu.settings}/>*/}
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
