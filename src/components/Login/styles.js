import leftPad from "left-pad";
import { Left } from "native-base";

export default {
    container:
    {
        backgroundColor:'white',
        flex: 8,
        justifyContent: 'center',
    },
    logoContainer:
    {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:
    {
        width: 100,
        height:100,
    },
    ///////////////////////////////////////
    textContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:
    {
        fontSize: 40,

    },
    ///////////////////////////////////////
    inputContainer:
    {
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputViewContainer:
    {
        width:'100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView:
    {
        width:300,
        height:50,
        flexDirection:'row',
        borderBottomWidth:1,
    },
    iconView:
    {
        width:50,
        height:'100%',
    },
    Icon:
    {
        width:50,
        height:50,
    },
    inputAccView:
    {
        width:250,
        height: '100%',
    },
    inputAcc:
    {
        width:250,
        height:60,
    },
    inputPassContainer:
    {
        flex:1,
    },
  



    loginButtonContainer:
    {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton:
    {
        width:300,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099F7',
        borderRadius:50,
    },
    textLoginButton:
    {
        color: 'white',
    },
    ////////////////////////////////////////
    iconContainer:
    {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookButton:
    {
        width:50,
        height:50,
    },
    facebookIcon:
    {
        width:50,
        height:50,
    },

}