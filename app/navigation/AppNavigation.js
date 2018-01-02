import React from 'react'
import { DrawerNavigator, StackNavigator, Header } from 'react-navigation'
import { Image, TouchableOpacity, View } from 'react-native'
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
import Faq from '../containers/Faq/Faq'
import Checklist from '../containers/Checklist/Checklist'
import s from './AppNavigationStyles'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import {StyleSheet} from 'react-native'

// TODO replace all absolute styles with StyleSheet.absoluteFill
export const ImageHeader = props => (
  // TODO change color
  <View style={{ backgroundColor: 'rgba(0,164,217,0)' }}>
    <Image
      style={StyleSheet.absoluteFill}
      // TODO add ability to change image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
)

const BackButton = ({navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={s.iconWrapper}
  >
    <Icon style={s.icon} name='chevron-left'/>
  </TouchableOpacity>
)

const DrawerButton = ({navigation}) => (
  <TouchableOpacity
    style={s.iconWrapper}
    onPress={() => navigation.navigate('DrawerOpen')}>

    <Icon style={s.icon} name='menu'/>
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
  Faq: {screen: Faq},
  Checklist: {screen: Checklist},
}, {
  initialRouteName: 'Guide',
  cardStyle: {
    backgroundColor: Colors.background,
  },
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Colors.transparent,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: Colors.white,
      fontSize: Fonts.size.h4,
      fontWeight: '300',
    },
    // header: null,
    headerTintColor: Colors.white,
    // TODO https://github.com/react-community/react-navigation/pull/1999
    // headerLeft: <BackButton navigation={navigation}/>,
    // headerRight: <DrawerButton navigation={navigation}/>,
    // headerTitle: null
  }),
})

const DrawerNav = DrawerNavigator({
  Main: {screen: MainNav},
  // SummaryScreen: {screen: SummaryScreen, navigationOptions: {drawerLabel: 'See my information'}},
  // HowItWorksScreen: {screen: HowItWorksScreen, navigationOptions: {drawerLabel: 'Back to Start'}},
}, {
  drawerWidth: Metrics.screenWidth,
  drawerPosition: 'left',
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

export default DrawerNav
