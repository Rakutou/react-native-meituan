// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import NearbyHeaderView from './NearbyHeaderView'
import {color, Button, NavigationItem} from '../../widget'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import api from '../../api'

type Props = {
    types: Array<string>,
    navigation: any,
}

type State = {
    dataList: Array<any>,
    refreshState: number
}

const keyExtractor = (item: Object, index: number) => (item.id + index)

export default class NearbyListScene extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)
        StatusBar.setBarStyle("default", false)
        this.state = {
            typeIndex: 0,
            dataList: [],
            refreshState: RefreshState.Idle
        }
    }

    componentDidMount() {
        this.onHeaderRefresh()
    }

    onHeaderRefresh = async () => {
        try {
            this.setState({refreshState: RefreshState.HeaderRefreshing})
            let dataList = await this.fetchNewBatch()
            this.setState({
                dataList: dataList,
                refreshState: RefreshState.Idle
            })
        } catch (error) {
            this.setState({refreshState: RefreshState.Failure})
        }
    }

    onFooterRefresh = async () => {
        try {
            this.setState({refreshState: RefreshState.FooterRefreshing})
            let dataList = await this.fetchNewBatch()
            this.setState({
                dataList: this.state.dataList.concat(dataList),
                refreshState: RefreshState.Idle
            })
        } catch (error) {
            this.setState({refreshState: RefreshState.Failure})
        }
    }

    fetchNewBatch = async () => {
        let response = await fetch(api.recommend)
        let json = await response.json()
        let dataList = json.data.map((info) => {
            return {
                id: info.id,
                imageUrl: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}]${info.title}`,
                price: info.price
            }
        })

        dataList.sort(() => {return 0.5 - Math.random()})
        return dataList
    }

    renderCell = (data: Object) => (
        <GroupPurchaseCell 
            info={data.item} 
            onPress={(info: Object) => {
                this.props.navigation.navigate('GroupPurchase', {info})
            }} 
        />
    )

    renderHeader = () => (
        <NearbyHeaderView 
            typeIndex={0}
            titles={this.props.types} 
            onSelected={(index: number) => {
                this.onHeaderRefresh()
            }}
        />
    )

    render() {
        const { dataList, refreshState } = this.state
        return (
            <RefreshListView 
                data={dataList} 
                keyExtractor={keyExtractor}
                refreshState={refreshState}
                renderItem={this.renderCell} 
                onHeaderRefresh={this.onHeaderRefresh}
                onFooterRefresh={this.onFooterRefresh}
                ListHeaderComponent={this.renderHeader}
            />
        )
    }
}

const styles = StyleSheet.create({
    
})

