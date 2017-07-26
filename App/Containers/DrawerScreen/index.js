import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LaunchScreen from '../SelectAgeScreen'
import PersonTypeScreen from '../../Containers/PersonTypeScreen'
import CategoriesScreen from '../../Containers/CategoriesScreen'
import CategoryScreen from '../../Containers/CategoryScreen'
import HowItWorksScreen from '../../Containers/HowItWorksScreen'
import ChecklistScreen from '../../Containers/ChecklistScreen'
import BuildTeamScreen from '../SelectEthnicityScreen'

export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerRight) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerRight,
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
});

export const getDrawerConfig = (drawerWidth, drawerPosition) => ({
  drawerWidth,
  drawerPosition,
});

// class NavBarItem extends React.Component {
//   render () {
//     const { iconName, onPress } = this.props;
//     return (
//       <TouchableOpacity
//         style={{ paddingHorizontal: 20 }}
//         onPress={() => onPress()}>
//         <Icon name={iconName} size={20} color="black"/>
//       </TouchableOpacity>
//
//     );
//   }
// }
//
// const getDrawerItem = navigation => (
//   <NavBarItem
//     iconName='menu'
//     onPress={() => {
//       if (navigation.state.index === 0) {
//         // check if drawer is not open, then only open it
//         navigation.navigate('DrawerOpen')
//       } else {
//         // else close the drawer
//         navigation.navigate('DrawerClose')
//       }
//     }}
//   />
// )
//
// const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={24} color={tintColor}/>
//
// // const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor)
// // const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor)
// // const csDrawerIcon = ({ tintColor }) => getDrawerIcon('user-md', tintColor)
//
// const homeNavOptions = {
//   // headerStyle: {
//   //   backgroundColor: Colors.transparent,
//   // },
//   // headerTitleStyle: {
//   //   color: 'black',
//   // },
//   // headerTintColor: 'black',
//   drawerLabel: 'Home',
// }
//
// const Drawer = DrawerNavigator({
//   LaunchScreen: { screen: LaunchScreen },
//   PersonTypeScreen: { screen: PersonTypeScreen },
//   CategoriesScreen: { screen: CategoriesScreen },
//   CategoryScreen: { screen: CategoryScreen },
//   HowItWorksScreen: { screen: HowItWorksScreen },
//   ChecklistScreen: { screen: ChecklistScreen },
//   BuildTeamScreen: { screen: BuildTeamScreen },
// }, {
//   drawerWidth: 300,
//   drawerPosition: 'right',
// })
//
// export default Drawer

class NavBarItem extends React.Component {
  render() {
    const { iconName, onPress } = this.props;
    return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20 }}
      onPress={() => onPress()}>

    <Icon name={iconName} size={20} color="#fff" />
      </TouchableOpacity>

  );
  }
}

// this is a method to retrieve icon element to show beside your title in the drawer
const homeDrawerIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

// this is a method to retrieve nav header of your home screen
const homeNavOptions = () => ({
  title: 'Home',
  headerStyle: {
  backgroundColor: 'blue',
  },
  headerTitleStyle: {
  color: 'white',
  },
  headerTintColor: 'white',
  drawerLabel: 'Home',
  drawerIcon: homeDrawerIcon,
});

// this is the Drawer including HomeScreen
const Drawer = DrawerNavigator({
  LaunchScreen: { screen: LaunchScreen, navigationOptions: homeNavOptions },
  PersonTypeScreen: { screen: PersonTypeScreen, navigationOptions: homeNavOptions },
  CategoriesScreen: { screen: CategoriesScreen, navigationOptions: homeNavOptions },
  CategoryScreen: { screen: CategoryScreen, navigationOptions: homeNavOptions },
}, getDrawerConfig(300, 'right'));

// this is a method to retrieve the menu bar item for the drawer
const getDrawerItem = (navigation) => (
<NavBarItem
  iconName="menu"
  onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
/>
  );

  // here’s the key point, you have to retrieve navigation object because navigationOptions can be a dynamic method or static object
  Drawer.navigationOptions = ({ navigation }) => ({
  title: 'AppName',
  headerStyle: {
  backgroundColor: 'blue',
  },
  headerTitleStyle: {
  color: 'white',
  },
  headerTintColor: 'white',
  headerRight: getDrawerItem(navigation),
});

// after assign navigationOptions only export it
export default Drawer;
