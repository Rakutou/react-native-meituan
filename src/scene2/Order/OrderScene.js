// @flow

import React, { PureComponent } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color, DetailCell, SpacingView} from '../../widget'
import api from '../../api'

import OrderMenuItem from './OrderMenuItem'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {
    navigation: any
}

type State = {
    dataList: Array<Object>,
    refreshState: number
}

const menuInfos = [
    {
        title: '待付款', 
        icon: require('../../img/order/order_tab_need_pay.png')
    },
    {
        title: '待使用', 
        icon: require('../../img/order/order_tab_need_use.png')
    },
    {
        title: '待评价', 
        icon: require('../../img/order/order_tab_need_review.png')
    },
    {
        title: '退款/售后', 
        icon: require('../../img/order/order_tab_needoffer_aftersale.png')
    }
]

export default class OrderScene extends PureComponent<Props, State> {
    static navigationOptions = ({navigation}: any) => ({
        title: '订单',
        headerStyle: {
            backgroundColor: '#fff'
        }
    })

    constructor(props: Props) {
        super(props)
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle
        }
    }

    componentDidMount() {
        this.fetchNewBatch()
    }

    fetchNewBatch = async () => {
        try {
            this.setState({refreshState: RefreshState.HeaderRefreshing})

            const response = await fetch(api.recommend)
            const json = await response.json()
            const dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            dataList.sort(() => {return 0.5 - Math.random()})
            this.setState({
                dataList: dataList,
                refreshState: RefreshState.NoMoreData,
            })
        } catch (error) {
            this.setState({refreshState: RefreshState.Failure})
        }
    }

    renderCell = ({item}: Object) => (
        <GroupPurchaseCell 
            info={item} 
            onPress={(info: Object) => {
                this.props.navigation.navigate('GroupPurchase', {info})
            }}
        />
    )

    renderListHeader = () => (
        <View>
            <View>
                <DetailCell title='我的订单' subtitle='全部订单' style={{height: 38}} />
                <View style={styles.menuContainer}>
                    {
                        menuInfos.map((item, index) => (
                            <OrderMenuItem title={item.title} icon={item.icon} key={index}/>
                        ))
                    }
                </View>
            </View>
            <SpacingView />
            <DetailCell title='我的收藏' subtitle='查看全部' style={{height: 38}} />
        </View>
    )

    render() {
        const {refreshState, dataList} = this.state
        const keyExtractor = (item: Object, index: number) => (item.id)

        return (
            <RefreshListView 
                style={styles.container}
                data={dataList}
                renderItem={this.renderCell}
                refreshState={refreshState}
                keyExtractor={keyExtractor}
                onHeaderRefresh={this.fetchNewBatch}
                ListHeaderComponent={this.renderListHeader}
            />  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
