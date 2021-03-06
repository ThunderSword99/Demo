import {AppRegistry} from 'react-native';
import Splash from './src/splash';
import Login from './src/components/Login/index';
import {name as appName} from './app.json';
import React, { Component } from 'react';
import Home from './src/components/Home/index'
import App from './src/router/SwitchNavigator'

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {currentScreen:'Splash'};
        console.log('Start doing some tasks for about 3 seconds');
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds');
            this.setState({currentScreen:'Login'})
        },3000)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>
        return mainScreen;
    }
}



AppRegistry.registerComponent(appName, () => App);
