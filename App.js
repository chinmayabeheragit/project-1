// import React from "react";
// import {} from 'react-native';
// // import Login from "./src/auth/Components/login"
// import Login from "./src/screens/Home/Components/home"
 




// export default class App extends React.Component {
//   render(){
//     return(
// <>

// <Login/>


// </>
//     )
//   }
// }
// import React from "react";
// import { } from "react-native"
import SplashScreen from 'react-native-splash-screen';

// import { Provider } from 'react-redux'
// export default class App extends React.Component {
//   componentDidMount() {
//     SplashScreen.hide();
//   }
//   render() {
//     return <Router />
//   };
// }

import Router from "./src/router/routerCont";
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Logo from "./src/Pages/images/SplashScreen.png"
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <ImageBackground
          source={{}}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.SplashScreen_ChildView}>
            <Image source={Logo} style={styles.image} />
            <ActivityIndicator size="large" color="#2E2970" style={{margin:80}} />
            {/* <Text style={{fontWeight: 'bold', color: 'white'}}>
              QUICK BITS SEVEN
            </Text> */}
            {/* <Text style={{color: 'white', fontWeight: 'normal'}}>
              AUTOMATED VENDING MACHINES
            </Text> */}
          </View>
        </ImageBackground>
      </View>
    );
    if (this.state.isVisible === true) {
      return <View style={styles.MainContainer}>{Splash_Screen}</View>;
    } else {
      return <Router />;
    }
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    // flexDirection:"column",
    // justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  image: {width: '100%', height: '100%', },
});
