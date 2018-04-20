// @flow
import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshRecommnedListAction } from '../../actions/thunks/recommend-creator'

import {Heading3, Paragraph} from '../../widget/Text';
import {color, NavigationItem, SpacingView} from '../../widget'

import { screen } from '../../common/index';
import HomeMenuView from "./HomeMenuView";
import HomeGridView from "./HomeGridView";
import GroupPurchaseCell from "../GroupPurchase/GroupPurchaseCell";
import api from '../../api.js'

const keyExtrator = (item: Object) => ('cell' + item.id);
class HomeScene extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image style={styles.searchIcon} source={require('../../img/home/search_icon.png')}></Image>
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        ),
        headerLeft: (
            <NavigationItem
                title='福州'
                titleStyle={{color: 'white'}}
                onPress={() => {}}
            />
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                onPress={() => {}}
            />
        ),
        headerStyle: { backgroundColor: color.primary }
    });

    paging: number;

    constructor(props: Props) {
        super(props)
        this.renderCell = this.renderCell.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.onEndReached = this.onEndReached.bind(this);
    }

    componentDidMount() {
        this.onRefresh();
    }

    onRefresh() {
        this.props.fetchRecommendList();
    }

    onEndReached(info: {distanceFromEnd: number}) {
        console.log('distanceFromEnd', info.distanceFromEnd, this.page, this.paging)
    };

    convertData(dataList) {
        return dataList.map((info) => ({
            id: info.id,
            imageUrl: info.squareimgurl,
            title: info.mname,
            subtitle: `[${info.range}]${info.title}`,
            price: info.price
        }));
    }

    renderCell(info) {
        return (
            <GroupPurchaseCell 
                info={info.item} 
                onPress={(info: Object) => {
                    this.props.navigation.navigate('GroupPurchase', {info})
                }}
            />
        )
    };

    renderListHeader() {
        return (
            <View>
                <HomeMenuView 
                    menuInfos={api.menuInfo} 
                    onMenuSelected={(index: number) => {
                        alert(index)
                    }} 
                />
                <SpacingView />
                <HomeGridView 
                    infos={api.daogou} 
                    onGridSelected={(index: number) => {
                        alert(index)
                    }} 
                />
                <SpacingView />
                <View style={styles.recommendHead}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    };

    render() {
        const { dataList, isLoading } = this.props;
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.convertData(dataList)}
                    keyExtractor={keyExtrator}
                    refreshing={isLoading}
                    renderItem={this.renderCell}
                    onRefresh={this.onRefresh}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.5}
                    ListHeaderComponent={this.renderListHeader}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paper
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    recommendHead: {
        height: 35,
        paddingLeft: 15,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white'
    }
});

const mapStateToProps = (state) => {
    const recommend = state.recommend;
    return {
        dataList: recommend.dataList,
        isLoading: recommend.isLoading
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchRecommendList: bindActionCreators(refreshRecommnedListAction, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);

