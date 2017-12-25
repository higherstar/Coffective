import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
// import SelectAgeScreen from '../containers/SelectAgeScreen'
// import PersonTypeScreen from '../containers/PersonTypeScreen'
// import HowItWorksScreen from '../containers/HowItWorksScreen'
// import SelectEthnicityScreen from '../containers/SelectEthnicityScreen'
// import PushNotificationsScreen from '../containers/PushNotificationsScreen'
import LoginScreen from '../containers/LoginScreen'
// import RegistrationScreen from '../containers/RegistrationScreen'
// import AskForFeedbackScreen from '../containers/AskForFeedbackScreen'
// import SelectDueDateScreen from '../containers/SelectDueDateScreen'
// import SummaryScreen from '../containers/SummaryScreen'
import { Image, TouchableOpacity } from 'react-native'
import { Colors, Images, Metrics } from '../themes'
import { Drawer } from '../components'
import Welcome from '../containers/Welcome/Welcome'

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
  // HowItWorksScreen: {screen: HowItWorksScreen},
  LoginScreen: {screen: LoginScreen},
  // RegistrationScreen: {screen: RegistrationScreen},
  // PersonTypeScreen: {screen: PersonTypeScreen},
  // SelectAgeScreen: {screen: SelectAgeScreen},
  // SelectEthnicityScreen: {screen: SelectEthnicityScreen},
  // AskForFeedbackScreen: {screen: AskForFeedbackScreen},
  // PushNotificationsScreen: {screen: PushNotificationsScreen},
  // SelectDueDateScreen: {screen: SelectDueDateScreen},
  // SummaryScreen: {screen: SummaryScreen},
}, {
  initialRouteName: 'Welcome',
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
    headerTitle: (
      <Image source={Images.logo} style={{
        maxHeight: 20,
        resizeMode: 'contain',
        flex: 1,
        alignSelf: 'center'
      }}/>
    )
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
