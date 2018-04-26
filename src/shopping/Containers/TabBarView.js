
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TabBarIOS
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Classify from '../Components/Classify';
import AboutMe from '../Components/AboutMe';

import HomeContainer from './HomeContainer';
import BrandContainer from './BrandContainer';
import ShopCarContainer from './ShopCarContainer';

const tabBarItems = [
    { title: '首页', icon:'home' , component: HomeContainer },
    { title: '品牌', icon:'bookmark', component: BrandContainer },
    { title: '分类', icon:'th', component: Classify },
    { title: '购物车', icon:'shopping-cart', component: ShopCarContainer },
    { title: '我的', icon:'user' , component: AboutMe },
]

export default class TarBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render() {
        return (
            <TabBarIOS tintColor={'red'} >
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <FontAwesome.TabBarItem
                                key={i}
                                title={controller.title}
                                iconName={controller.icon}
                                selectedIconName={controller.icon}
                                selected={this.state.selectedTab === controller.title}
                                onPress={() => {
                                    this.setState({
                                       selectedTab: controller.title
                                    })
                                }}
                            >
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </FontAwesome.TabBarItem>
                        )
                    })
                }
            </TabBarIOS>
        );
    }
}