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
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../Themes'
import { Drawer } from '../Components'

const NavBarItem = ({iconName, onPress}) => (
  <TouchableOpacity
    style={{paddingHorizontal: 20}}
    onPress={onPress}>

    <Icon name={iconName} size={20} color={Colors.white}/>
  </TouchableOpacity>
)

// Manifest of possible screens
const MainNav = StackNavigator({
  HowItWorksScreen: {screen: HowItWorksScreen},
  SelectAgeScreen: {screen: SelectAgeScreen},
  PersonTypeScreen: {screen: PersonTypeScreen},
  SelectEthnicityScreen: {screen: SelectEthnicityScreen},
  PushNotificationsScreen: {screen: PushNotificationsScreen},
  LoginScreen: {screen: LoginScreen},
  RegistrationScreen: {screen: RegistrationScreen},
  AskForFeedbackScreen: {screen: AskForFeedbackScreen},
  SelectDueDateScreen: {screen: SelectDueDateScreen},
}, {
  initialRouteName: 'HowItWorksScreen',
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerTintColor: Colors.white,
    headerRight: <NavBarItem
      iconName='menu'
      onPress={() => navigation.navigate('DrawerOpen')}
    />,
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
