import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import SelectAgeScreen from '../Containers/SelectAgeScreen'
import PersonTypeScreen from '../Containers/PersonTypeScreen'
// import CategoriesScreen from '../Containers/CategoriesScreen'
// import CategoryScreen from '../Containers/CategoryScreen'
import HowItWorksScreen from '../Containers/HowItWorksScreen'
// import ChecklistScreen from '../Containers/ChecklistScreen'
import SelectEthnicityScreen from '../Containers/SelectEthnicityScreen'
// import ArticleScreen from '../Containers/ArticleScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'
// import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
// import ResetPasswordScreen from '../Containers/ResetPasswordScreen'
import AskForFeedbackScreen from '../Containers/AskForFeedbackScreen'
// import ProfileScreen from '../Containers/ProfileScreen'
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
  // CategoriesScreen: {screen: CategoriesScreen},
  // CategoryScreen: {screen: CategoryScreen},
  // ChecklistScreen: {screen: ChecklistScreen},
  SelectEthnicityScreen: {screen: SelectEthnicityScreen},
  // ArticleScreen: {screen: ArticleScreen},
  LoginScreen: {screen: LoginScreen},
  RegistrationScreen: {screen: RegistrationScreen},
  // ForgotPasswordScreen: {screen: ForgotPasswordScreen},
  // ResetPasswordScreen: {screen: ResetPasswordScreen},
  AskForFeedbackScreen: {screen: AskForFeedbackScreen},
  // ProfileScreen: {screen: ProfileScreen},
  SelectDueDateScreen: {screen: SelectDueDateScreen},
}, {
  initialRouteName: 'SelectEthnicityScreen',
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
  // LoginScreen: {screen: LoginScreen, navigationOptions: {drawerLabel: 'Sign In'}},
  // ProfileScreen: {screen: ProfileScreen, navigationOptions: {drawerLabel: 'About me'}},
  // HowItWorksScreen: {screen: HowItWorksScreen, navigationOptions: {drawerLabel: 'Be Prepared'}},
  // SelectEthnicityScreen: {screen: SelectEthnicityScreen, navigationOptions: {drawerLabel: 'Build My Team'}},
  // AskForFeedbackScreen: {
  //   screen: AskForFeedbackScreen,
  //   navigationOptions: {drawerLabel: 'Find Local Resources'}
  // },
}, {
  drawerWidth: 300,
  drawerPosition: 'right',
  contentComponent: Drawer
})

export default DrawerNav
