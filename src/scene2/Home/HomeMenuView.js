import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PageControl from 'react-native-page-control'
import {screen} from '../../common'
import {color} from '../../widget'
import HomeMenuItem from "./HomeMenuItem";

type Props = {
    menuInfos: Array<Object>,
    onMenuSelected: Function
}

type State = {
    currentPage: number
}

export default class HomeMenuView extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }

    onScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x
        let page = Math.round(x / screen.width)
        if (this.state.currentPage !== page) {
            this.setState({
                currentPage: page
            })
        }
    }

    render() {
        const { currentPage } = this.state
        const { menuInfos, onMenuSelected } = this.props

        const menuItems = menuInfos.map((info, idx) => {
            return (
                <HomeMenuItem 
                    key={info.title}
                    title={info.title} 
                    icon={info.icon} 
                    onPress={() => onMenuSelected(idx)}
                />
            )
        })

        let menuViews = []
        const pageCount = Math.ceil(menuItems.length / 10)
        for (let i = 0; i < pageCount; i++) {
            let menuView = (
                <View key={i} style={styles.menuView}>
                    {menuItems.slice(i * 10, i * 10 + 10)}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={styles.container}>
                <ScrollView 
                    horizontal
                    pagingEnabled
                    onScroll={this.onScroll}
                    scrollEventThrottle={18}
                    showsHorizontalScrollIndicator={false}>
                   {menuViews}
                </ScrollView>

                <PageControl 
                    style={styles.pageControl}
                    numberOfPages={pageCount} 
                    currentPage={currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor="gray"
                    currentPageIndicatorTintColor={color.primary}
                    indicatorSize={{width: 8, height: 8}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    menuView: {
        width: screen.width,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    pageControl: {
        margin: 10
    }
})
