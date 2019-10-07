import {
    createStackNavigator,
} from 'react-navigation-stack';
import {
    createAppContainer,

} from 'react-navigation';
import Login from '../Container/LoginContainer'
import Drawer from './DrawerNavigator'


const RootStack = createStackNavigator({
    Login: {
        screen: Login
    },
    Drawer: {
        screen: Drawer
    }
},
    {
        initialRouteName: "Login",
    }
);

const App = createAppContainer(RootStack);

export default App;