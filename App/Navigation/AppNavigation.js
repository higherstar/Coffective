import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import SelectAgeScreen from '../Containers/SelectAgeScreen'
import PersonTypeScreen from '../Containers/PersonTypeScreen'
import HowItWorksScreen from '../Containers/HowItWorksScreen'
import SelectEthnicityScreen from '../Containers/SelectEthnicityScreen'
import PushNotificationsScreen from '../Containers/PushNotificationsScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'
import AskForFeedbackScreen from '../Containers/AskForFeedbackScreen'
import SelectDueDateScreen from '../Containers/SelectDueDateScreen'
import SummaryScreen from '../Containers/SummaryScreen'
import { Image, TouchableOpacity } from 'react-native'
import { Colors, Images, Metrics } from '../Themes'
import { Drawer } from '../Components'

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
  HowItWorksScreen: {screen: HowItWorksScreen},
  LoginScreen: {screen: LoginScreen},
  RegistrationScreen: {screen: RegistrationScreen},
  PersonTypeScreen: {screen: PersonTypeScreen},
  SelectAgeScreen: {screen: SelectAgeScreen},
  SelectEthnicityScreen: {screen: SelectEthnicityScreen},
  AskForFeedbackScreen: {screen: AskForFeedbackScreen},
  PushNotificationsScreen: {screen: PushNotificationsScreen},
  SelectDueDateScreen: {screen: SelectDueDateScreen},
  SummaryScreen: {screen: SummaryScreen},
}, {
  initialRouteName: 'HowItWorksScreen',
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
  SummaryScreen: {screen: SummaryScreen, navigationOptions: {drawerLabel: 'See my information'}},
  HowItWorksScreen: {screen: HowItWorksScreen, navigationOptions: {drawerLabel: 'Back to Start'}},
}, {
  drawerWidth: 250,
  drawerPosition: 'right',
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

export default DrawerNav
