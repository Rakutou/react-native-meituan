import React from 'react';
import { 
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SplashScreen from '../Components/Splash';
import ClassifyScreen from '../Components/Classify';
import AboutMeScreen from '../Components/AboutMe';

import HomeScreen from './HomeContainer';
import BrandScreen from './BrandContainer';
import ShopCarScreen from './ShopCarContainer';

let tabBarItems = [
    { title: '首页', icon:'home', screen: HomeScreen },
    { title: '品牌', icon:'bookmark', screen: BrandScreen },
    { title: '分类', icon:'th', screen: ClassifyScreen },
    { title: '购物车', icon:'shopping-cart', screen: ShopCarScreen },
    { title: '我的', icon:'user', screen: AboutMeScreen },
];

tabBarItems = tabBarItems.map((v, k) => {
    return {
        screen: v.screen,
        navigationOptions: {
            tabBarLabel: v.title,
            tabBarIcon:  ({tintColor, focused}) => (
                <FontAwesome  
                    key={k}
                    name={v.icon} 
                    size={26} 
                    style={{color: tintColor, width: 24, height: 24, textAlign: 'center'}}
                />
            )
        }
    }
})

const TabNavScreen = TabNavigator({
    HomeTab: tabBarItems[0],
    BrandTab: tabBarItems[1],
    ClassifyTab: tabBarItems[2],
    ShopCartTab: tabBarItems[3],
    AboutMeTab: tabBarItems[4]
}, 
{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        style: { backgroundColor: '#fff' },
    },
});

const AppNavigator = StackNavigator({
    // Splash: SplashScreen,
    Tab: { screen: TabNavScreen }
});

export default AppNavigator;
