import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
// import SelectAgeScreen from '../containers/SelectAgeScreen'
// import PersonTypeScreen from '../containers/PersonTypeScreen'
// import SelectEthnicityScreen from '../containers/SelectEthnicityScreen'
// import PushNotificationsScreen from '../containers/PushNotificationsScreen'
// import AskForFeedbackScreen from '../containers/AskForFeedbackScreen'
// import SelectDueDateScreen from '../containers/SelectDueDateScreen'
// import SummaryScreen from '../containers/SummaryScreen'
import { Image, TouchableOpacity } from 'react-native'
import { Colors, Images, Metrics } from '../themes'
import { Drawer } from '../components'
import Welcome from '../containers/Welcome/Welcome'
import Guide from '../containers/Guide/Guide'
import Login from '../containers/Login/Login'
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword'
import Register from '../containers/Register/Register'

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
  // RegistrationScreen: {screen: RegistrationScreen},
  // PersonTypeScreen: {screen: PersonTypeScreen},
  // SelectAgeScreen: {screen: SelectAgeScreen},
  // SelectEthnicityScreen: {screen: SelectEthnicityScreen},
  // AskForFeedbackScreen: {screen: AskForFeedbackScreen},
  // PushNotificationsScreen: {screen: PushNotificationsScreen},
  // SelectDueDateScreen: {screen: SelectDueDateScreen},
  // SummaryScreen: {screen: SummaryScreen},
}, {
  initialRouteName: 'Guide',
  cardStyle: {
    backgroundColor: Colors.background
  },
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
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
