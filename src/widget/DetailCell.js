/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ViewPropTypes} from 'react-native'
import {Heading2, Heading3, Paragraph} from './Text'
import Separator from './Separator'
import {screen, system} from '../common'

type Props = {
    image?: any,
    style?: ViewPropTypes.style,
    title: string,
    index?: number,
    subtitle?: string,
    onPress?: Function
}

class DetailCell extends PureComponent<Props> {
    render() {
        const {image, style, title, subtitle, index, onPress} = this.props
        let icon = image && <Image style={styles.icon} source={image} />

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => (onPress && onPress(index))}>
                    <View style={[styles.content, style]}>
                        {icon}
                        <Heading3>{title}</Heading3>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <Paragraph style={{color: '#999999'}}>{subtitle}</Paragraph>
                        <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')} />
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
})

export default DetailCell
