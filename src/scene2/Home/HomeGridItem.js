// @flow

import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Heading2, Paragraph } from '../../widget/Text'
import { screen } from '../../common'
import { color } from '../../widget'

type Props = {
    info: Object,
    color: string,
    onPress: Function
}

export default class HomeGridItem extends PureComponent<Props> {
    render() {
        const { info, onPress, color } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View>
                    <Heading2 style={{marginBottom: 12, color: color}}>{info.title}</Heading2>
                    <Paragraph>{info.subtitle}</Paragraph>
                </View>
                <Image style={styles.img} resizeMode="contain" source={{uri: info.imgurl}} />
            </TouchableOpacity>
        );
    }
}

const itemWidth = screen.width / 3 - screen.onePixel;
const imgWidth = itemWidth - 30;
const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: itemWidth,
        borderColor: color.border,
        borderRightWidth: hairlineWidth,
        backgroundColor: 'white'
    },
    img: {
        width: imgWidth,
        height: imgWidth * 0.75
    }
})
