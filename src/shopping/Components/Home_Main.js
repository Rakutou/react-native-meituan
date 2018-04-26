





import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio,
    InteractionManager,
} from 'react-native';
import Common from '../Commom/constants';
import Swiper from 'react-native-swiper';
import Loading from '../Commom/Loading';

import HomeSwioer from '../Pages/HomeSwiper';
import HomeList102 from '../Pages/HomeList102';
import Home104 from '../Pages/Home104';
import Home18 from '../Pages/Home18';
import Home11 from '../Pages/Home11';
import Home4 from '../Pages/Home4';
import Home1 from '../Pages/Home1';
import Home8 from '../Pages/Home8';
import Home10 from '../Pages/Home10';
import Home12 from '../Pages/Home12';

let isRefreshing = false;
let isLoading = true;
let offest = '';
let tag = '';
let limit = 21;

export default class Home_Main extends PureComponent {
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource: ds
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const { HomeAction } = this.props;
            HomeAction(this.props.type, tag, offest, limit, isRefreshing, isLoading);
        });
    }

    render() {
        const { HomeReducer } = this.props;
        let homeList = [];
        if (this.props.type === 1) { //首页
            homeList = HomeReducer.HomeList;
        } else {
            homeList = HomeReducer.UGOList;
        }
        return (
            <View style={styles.container}>
                {HomeReducer.isLoading ? <Loading /> :
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(homeList.module ? homeList.module : []) }
                        renderRow={this._renderRow}
                        enableEmptySections={true}
                        initialListSize= {1}
                        style={styles.listView}
                    />
                }
            </View>
        );
    }

    _renderRow(rowData, rowID, rowIdentities) {
        switch (parseInt(rowData.moduleStyle)) {
            case 101:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <HomeSwioer bannerDate={rowData}/>
                    );
                }
            case 102:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <HomeList102 listDate={rowData}/>
                    );
                }
            case 104:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home104 module={rowData}/>
                    );
                }
            case 18:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                         <Home18 listDate={rowData}/>
                    );
                }
            case 11:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                         <Home11 module={rowData}/>  
                    );
                }
            case 4:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home4 module={rowData}/>
                    );
                }
            case 1:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home1 module={rowData}/>
                    );
                }
            case 10:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home10 module={rowData}/>
                    );
                }
            case 8:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home8 module={rowData}/>
                    );
                }
            case 12:
                if (rowIdentities == parseInt(rowData.modulePosition) - 1) {
                    return (
                        <Home12 module={rowData}/>
                    );
                }
            default:
                return (
                    <View style={{ width: Common.window.width, height: 100, backgroundColor: 'blue' }} />
                );
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: Common.window.width,
        backgroundColor: 'rgb(240, 240, 240)',
    },

    contentContainer: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)'
    },

    listView: {
        backgroundColor: 'white',
    },

    cellStyle:{
        backgroundColor: 'rgb(240, 240, 240)'
    }
});
