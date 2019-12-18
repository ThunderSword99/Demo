import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import Home from "../components/Home/index";
import Login from "../components/Login/index";



const RootStack =  createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(RootStack);

export default App;