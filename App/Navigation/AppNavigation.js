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
import { Colors, Images } from '../Themes'
import { Drawer } from '../Components'

const Menu = ({iconName, onPress}) => (
  <TouchableOpacity
    style={{paddingHorizontal: 20}}
    onPress={onPress}>

    <Image source={Images.hamburger} style={{width: 20, height: 20}}/>
  </TouchableOpacity>
)

const Left = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 20}}>
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
  initialRouteName: 'LoginScreen',
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
}, {
  drawerWidth: 300,
  drawerPosition: 'right',
  contentComponent: Drawer
})

export default DrawerNav
