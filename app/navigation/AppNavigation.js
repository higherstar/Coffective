import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../themes'
import { Drawer, Txt } from '../components'
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
import HowItWorks from '../containers/HowItWorks/HowItWorks'
import s from './AppNavigationStyles'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const BackButton = ({navigation, text}) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={s.iconWrapper}
  >
    <Icon style={s.icon} name='chevron-left'/>
    {text && <Txt style={s.backBtnText}>{text}</Txt>}
  </TouchableOpacity>
)

export const DrawerButton = ({navigation}) => (
  <TouchableOpacity
    style={s.iconWrapper}
    onPress={() => navigation.navigate('DrawerOpen')}>

    <Icon style={s.icon} name='menu'/>
  </TouchableOpacity>
)

export const SkipButton = ({navigation, routeName}) => (
  <TouchableOpacity
    style={s.skipBtn}
    onPress={() => navigation.navigate(routeName)}>

    <Txt style={s.skipBtnText}>Skip</Txt>
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
  HowItWorks: {screen: HowItWorks},
}, {
  initialRouteName: 'Welcome',
  cardStyle: {
    backgroundColor: Colors.background,
  },
  navigationOptions: ({navigation}) => ({
    headerStyle: ApplicationStyles.transparentHeader,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: Fonts.size.h4,
      fontWeight: '300',
    },
    headerTintColor: Colors.white,
    headerLeft: <BackButton navigation={navigation}/>,
    headerRight: <DrawerButton navigation={navigation}/>,
  }),
})

const DrawerNav = DrawerNavigator({
  Main: {screen: MainNav},
  Home: {screen: Home, navigationOptions: {drawerLabel: 'Home'}},
  Faq: {screen: Faq, navigationOptions: {drawerLabel: 'Faq'}},
  Checklist: {screen: Checklist, navigationOptions: {drawerLabel: 'Checklist'}},
  BuildTeam: {screen: BuildTeam, navigationOptions: {drawerLabel: 'BuildTeam'}},
}, {
  drawerWidth: Metrics.screenWidth,
  drawerPosition: 'left',
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

export default DrawerNav
