// @flow
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    // SectionList,
    FlatList,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import {
    color,
    Button,
    NavigationItem,
    Separator,
    SpacingView
} from '../../widget'
import {
    Heading2,
    Heading3,
    Paragraph,
    Heading1
} from '../../widget/Text'
import { screen,  system } from '../../common'
import api, {recommendUrlWithId, groupPurchaseDetailWithId} from '../../api'
import GroupPurchaseCell from './GroupPurchaseCell'

type Props = {
    navigation: any
}

type State = {
    dataList: Array<Object>,
    refreshing: boolean
}

export default class GroupPurchaseScene extends PureComponent<Props, State> {
    
    constructor(props: Props) {
        super(props)
        this.state = {
            dataList: [],
            refreshing: false
        }
    }

    componentDidMount() {
        this.onRefresh()
    }

    onRefresh = () => {
        InteractionManager.runAfterInteractions(() => {
            this.setState({refreshing: true})
            this.fetchNewBatch()
        })
    }

    fetchNewBatch = async () => {
        try {
            let info = this.props.navigation.state.params.info
            let response = await fetch(recommendUrlWithId(info.id))
            let json = await response.json()
            let dataList = json.data.deals.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            this.setState({
                dataList: dataList,
                refreshing: false
            })
        } catch (error) {
            this.setState({refreshing: false})
        }
    }

    renderCell = (data: Object) => (
        <GroupPurchaseCell 
            info={data.item} 
            onPress={(item: Object) => {
                alert(item)
            }} 
        />
    )

    renderSection = (info: Object) => {
        return (
            <View>
                <Text>166人评价</Text>
            </View>
        )
    }

    renderHeader = () => {
        const info = this.props.navigation.state.params.info
        return (
            <View>
                <View>
                    <Image style={styles.banner} source={{uri: info.imageUrl.replace('w.h', '480.0')}} />
                    <View style={styles.info}>
                        <View style={styles.price}>
                            <Heading2 style={{color: color.primary}}>￥</Heading2>
                            <Heading1 style={{marginBottom: -8, marginRight: 8}}>45</Heading1>
                            <Paragraph>门市价：￥50</Paragraph>
                        </View>
                        <Button 
                            title="立即抢购" 
                            titleStyle={{color: 'white', fontSize: 18}}
                            style={styles.buy}
                        />
                    </View>
                </View>
                <View style={styles.detail}>
                    {[1,2,3,4].map((v, k) => (
                        <View key={k} style={styles.agreement}>
                            <Image 
                                style={{width: 20, height: 20}} 
                                source={require('../../img/home/icon_deal_anytime_refund.png')} 
                            />
                            <Paragraph style={{color: '#89B24F', marginLeft: 6}}>随时退-{v}</Paragraph>
                        </View>
                    ))}
                    <View style={{flex: 1}} />
                    <Paragraph>已售{1234}</Paragraph>
                </View>
                <SpacingView />
                <View style={styles.recomendHead}>
                    <Heading2>看了本团购的用户还看了</Heading2>
                </View>
            </View>
        )
    }

    render() {
        // const sections = []
        const { dataList, refreshing } = this.state
        const keyExtractor = (item: Object) => ('group' + item.id)
        return (
            <FlatList 
                style={styles.container}
                data={dataList}
                refreshing={refreshing}
                onRefresh={this.onRefresh}
                keyExtractor={keyExtractor}
                renderItem={this.renderCell}
                ListHeaderComponent={this.renderHeader} 
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paper
    },
    banner: {
        width: screen.width,
        height: screen.width * 0.5
    },
    info: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buy: {
        width: 94,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#fc9e28'
    },
    detail: {
        padding: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    agreement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
    },
    recomendHead: {
        backgroundColor: '#fff', 
        paddingVertical: 8,
        paddingLeft: 10, 
        justifyContent: 'center', 
        borderBottomWidth: screen.onePixel, 
        borderBottomColor: color.border
    }
})