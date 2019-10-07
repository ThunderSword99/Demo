import { createDrawerNavigator } from 'react-navigation-drawer';
import { 
  createAppContainer
} from "react-navigation";
import Home from "../Container/HomeContainer"
import Login from "../Container/LoginContainer"
import SlideBar from "../Container/SlideBarContainer"

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    Login: Login,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor :'#1999CE',
      inactiveBackgroundColor :'#ffffff',
    },
  }
 
);

const Drawer = createAppContainer(MyDrawerNavigator);

export default Drawer;
