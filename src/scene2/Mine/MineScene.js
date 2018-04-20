// @flow

import React, { PureComponent } from 'react';
import { View, Text, Image, SectionList, StyleSheet } from 'react-native';
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color, DetailCell, NavigationItem, SpacingView} from '../../widget'

type Props = {
}

const sections = [
    {
        title: 'section one',
        data: [
            {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png')},
            {title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png')},
            {title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png')},
            {title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png')}
        ]
    },
    {
        title: 'section two',
        data: [
            {title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png')},
            {title: '我的评价', image: require('../../img/mine/icon_mine_comment.png')},
            {title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png')},
            {title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png')},
            {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png')}
        ]
    },
    {
        title: 'section three',
        data: [
            {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
            {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
        ]
    }
]

export default class MineScene extends PureComponent<Props> {

    static navigationOptions = ({navigation}: any) => ({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0,
            borderBottomWidth: 0,
        }
    })

    renderItem = ({item, index}: Object) => (
        <DetailCell 
            index={index}
            key={item.title} 
            image={item.image} 
            title={item.title} 
            subtitle={item.subtitle} 
            onPress={(index: number) => {
                alert(index)
            }}
        />
    )

    // renderSectionHeader = ({section}: Object) => (
    //     <View style={styles.section}>
    //         <Heading3>{section.title}</Heading3>
    //     </View>
    // )

    renderSectionHeader = ({section}: Object) => (
        <SpacingView />
    )

    renderListHeader = () => (
        <View style={styles.header}>
            <Image style={styles.avatar} source={require('../../img/mine/avatar.png')} />
            <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Heading2 style={{color: '#fff'}}>上帝</Heading2>
                    <Image source={require('../../img/mine/beauty_technician_v15.png')}/>
                </View>
                <Paragraph style={{color: '#fff', marginTop: 5}}>个人信息</Paragraph>
            </View>
        </View>
    )

    render() {
        const keyExtractor = (item: Object) => (item.title)
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', width: screen.width, height: screen.height, backgroundColor: color.primary}}></View>
                <SectionList 
                    sections={sections}
                    keyExtractor={keyExtractor}
                    renderItem={this.renderItem}
                    stickySectionHeadersEnabled={false}
                    renderSectionHeader={this.renderSectionHeader}
                    ListHeaderComponent={this.renderListHeader} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paper
    },
    section: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: color.paper
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.primary,
    },
    avatar: {
        width: 50,
        height: 50
    }
})
