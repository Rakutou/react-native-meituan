import React, { PureComponent } from "react";
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import RootScene from "./src/RootScene2";
import store from './src/store';


class RNMT extends PureComponent {
   render() {
       return (
           <Provider store={store}>
               <RootScene />
           </Provider>
       )
   }
}
 
AppRegistry.registerComponent('RNDemo', () => RNMT);
