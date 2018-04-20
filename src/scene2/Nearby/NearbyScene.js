// @flow

import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {color, Button, NavigationItem, SpacingView} from '../../widget'
import {screen, system} from '../../common'
import api from '../../api'
import NearbyListScene from './NearbyListScene'

export default class NearbyScene extends PureComponent {

    static navigationOptions = ({navigation}: any) => ({
        headerRight: (
            <TouchableOpacity style={styles.headerRight}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        ),

        headerLeft: (
            <TouchableOpacity style={styles.headerLeft}>
                <Image style={{width: 13, height: 16}} source={require('../../img/public/icon_food_merchant_address.png')} />
                <Text style={{fontSize: 15, color: '#333333'}}> 福州 鼓楼</Text>
            </TouchableOpacity>
        ),

        headerStyle: {backgroundColor: 'white'}
    })

    render() {

        const titles = ['享美食', '住酒店', '爱玩乐', '全部']
        const types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
            []
        ]

        return (
            <ScrollableTabView 
                style={styles.container} 
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}>
            
                {titles.map((title, index) => (
                     <NearbyListScene 
                        key={index}
                        tabLabel={title}
                        types={types[index]}
                        navigation={this.props.navigation}
                    />
                ))}

            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paper
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    headerLeft: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRight: {
        width: screen.width * 0.65,
        height: 30,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#eeeeee',
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 10
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    }
});
