import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';
import App from './Containers/App';
import SplashScreen from 'react-native-splash-screen';

export default class Root extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}
