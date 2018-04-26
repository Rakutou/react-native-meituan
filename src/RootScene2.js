
import React, {PureComponent} from 'react'
import { 
    StackNavigator, 
    TabNavigator, 
    TabBarBottom 
} from 'react-navigation'

import color from './widget/color'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene2/Home/HomeScene'
import NearbyScene from './scene2/Nearby/NearbyScene'
import OrderScene from './scene2/Order/OrderScene'
import MineScene from './scene2/Mine/MineScene'
import GroupPurchaseScene from './scene2/GroupPurchase/GroupPurchaseScene'

const tabBarInfo = {
    Home: {
        title: '团购',
        icon: require('./img/tabbar/tabbar_homepage.png'),
        selectedIcon: require('./img/tabbar/tabbar_homepage_selected.png')
    },
    Nearby: {
        title: '附近',
        icon: require('./img/tabbar/tabbar_merchant.png'),
        selectedIcon: require('./img/tabbar/tabbar_merchant_selected.png')
    },
    Order: {
        title: '订单',
        icon: require('./img/tabbar/tabbar_order.png'),
        selectedIcon: require('./img/tabbar/tabbar_order_selected.png')
    },
    Mine: {
        title: '我的',
        icon: require('./img/tabbar/tabbar_mine.png'),
        selectedIcon: require('./img/tabbar/tabbar_mine_selected.png')
    }
};

const HomeStack = StackNavigator({
    Home: {screen: HomeScene},
    GroupPurchase: {screen: GroupPurchaseScene}
});

const NearbyStack = StackNavigator({
    Nearby: {screen: NearbyScene},
    GroupPurchase: {screen: GroupPurchaseScene}
});

const OrderStack = StackNavigator({
    Order: {screen: OrderScene},
    GroupPurchase: {screen: GroupPurchaseScene}
});

const MineStack = StackNavigator({
    Mine: {screen: MineScene}
});

const TabBarController = TabNavigator(
    {
        Home: { screen: HomeStack },
        Nearby: { screen: NearbyStack },
        Order: { screen: OrderStack },
        Mine: { screen: MineStack }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: tabBarInfo[navigation.state.routeName].title,
            tabBarIcon: ({focused, tintColor}) => {
                const { routeName } = navigation.state;
                let icon = tabBarInfo[routeName].icon;
                let selectedIcon = tabBarInfo[routeName].selectedIcon;
                return (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={icon}
                        selectedImage={selectedIcon}
                    />
                )
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.gray,
            style: { backgroundColor: '#ffffff' },
        },
    }
);

export default class RootScene extends PureComponent<{}> {
    render() {
        return (
            <TabBarController />
        )
    }
};
