import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'
import { Colors, Images, Metrics, Fonts } from '../themes'
import { Drawer } from '../components'
import Welcome from '../containers/Welcome/Welcome'
import Guide from '../containers/Guide/Guide'
import Login from '../containers/Login/Login'
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword'
import Register from '../containers/Register/Register'
import PersonType from '../containers/PersonType/PersonType'
import Name from '../containers/Name/Name'
import State from '../containers/State/State'
import Age from '../containers/Age/Age'
import Expectation from '../containers/Expectation/Expectation'
import Home from '../containers/Home/Home'
import BuildTeam from '../containers/BuildTeam/BuildTeam'

const Menu = ({iconName, onPress}) => (
  <TouchableOpacity
    style={{paddingHorizontal: Metrics.baseMargin, height: Metrics.navBarWithOutStatusBarHeight, justifyContent: 'center'}}
    onPress={onPress}>

    <Image source={Images.hamburger} style={{width: 20, height: 20}}/>
  </TouchableOpacity>
)

const Left = ({onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{paddingHorizontal: Metrics.baseMargin, height: Metrics.navBarWithOutStatusBarHeight, justifyContent: 'center'}}
  >
    <Image
      source={Images.backButton}
      style={{width: 20, height: 20}}
    />
  </TouchableOpacity>
)

// Manifest of possible screens
const MainNav = StackNavigator({
  Welcome: {screen: Welcome},
  Guide: {screen: Guide},
  Login: {screen: Login},
  ForgotPassword: {screen: ForgotPassword},
  Register: {screen: Register},
  PersonType: {screen: PersonType},
  Name: {screen: Name},
  State: {screen: State},
  Age: {screen: Age},
  Expectation: {screen: Expectation},
  Home: {screen: Home},
  BuildTeam: {screen: BuildTeam},
}, {
  initialRouteName: 'BuildTeam',
  cardStyle: {
    backgroundColor: Colors.background,
  },
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: Colors.white,
      fontSize: Fonts.size.h4,
      fontWeight: '300'
    },
    headerTintColor: Colors.white,
    // TODO https://github.com/react-community/react-navigation/pull/1999
    headerLeft: <Left
      onPress={() => navigation.goBack()}
    />,
    headerRight: <Menu
      onPress={() => navigation.navigate('DrawerOpen')}
    />,
    headerTitle: null
  }),
})

const DrawerNav = DrawerNavigator({
  Main: {screen: MainNav},
  // SummaryScreen: {screen: SummaryScreen, navigationOptions: {drawerLabel: 'See my information'}},
  // HowItWorksScreen: {screen: HowItWorksScreen, navigationOptions: {drawerLabel: 'Back to Start'}},
}, {
  drawerWidth: 250,
  drawerPosition: 'right',
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

export default DrawerNav
