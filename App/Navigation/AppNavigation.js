import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import PersonTypeScreen from '../Containers/PersonTypeScreen'
import CategoriesScreen from '../Containers/CategoriesScreen'
import CategoryScreen from '../Containers/CategoryScreen'
import HowItWorksScreen from '../Containers/HowItWorksScreen'
import ChecklistScreen from '../Containers/ChecklistScreen'
import BuildTeamScreen from '../Containers/BuildTeamScreen'
import ArticleScreen from '../Containers/ArticleScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
import ResetPasswordScreen from '../Containers/ResetPasswordScreen'
import FindLocalResourcesScreen from '../Containers/FindLocalResourcesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import SetZipScreen from '../Containers/SetZipScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../Themes'
import { Drawer } from '../Components'

const NavBarItem = ({ iconName, onPress }) => (
  <TouchableOpacity
    style={{ paddingHorizontal: 20 }}
    onPress={onPress}>

    <Icon name={iconName} size={20} color={Colors.white}/>
  </TouchableOpacity>
)

// Manifest of possible screens
const MainNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  PersonTypeScreen: { screen: PersonTypeScreen },
  CategoriesScreen: { screen: CategoriesScreen },
  CategoryScreen: { screen: CategoryScreen },
  HowItWorksScreen: { screen: HowItWorksScreen },
  ChecklistScreen: { screen: ChecklistScreen },
  BuildTeamScreen: { screen: BuildTeamScreen },
  ArticleScreen: { screen: ArticleScreen },
  LoginScreen: { screen: LoginScreen },
  RegistrationScreen: { screen: RegistrationScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen },
  ResetPasswordScreen: { screen: ResetPasswordScreen  },
  FindLocalResourcesScreen: { screen: FindLocalResourcesScreen },
  ProfileScreen: { screen: ProfileScreen },
  SetZipScreen: { screen: SetZipScreen },
}, {
  initialRouteName: 'LaunchScreen',
  navigationOptions: ({ navigation }) => ({
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
  Main: { screen: MainNav },
  LoginScreen: { screen: LoginScreen, navigationOptions: { drawerLabel: 'Sign In' } },
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { drawerLabel: 'About me' } },
  HowItWorksScreen: { screen: HowItWorksScreen, navigationOptions: { drawerLabel: 'Be Prepared' } },
  BuildTeamScreen: { screen: BuildTeamScreen, navigationOptions: { drawerLabel: 'Build My Team' } },
  FindLocalResourcesScreen: { screen: FindLocalResourcesScreen, navigationOptions: { drawerLabel: 'Find Local Resources' } },
}, {
  drawerWidth: 300,
  drawerPosition: 'right',
  contentComponent: Drawer
})

export default DrawerNav
