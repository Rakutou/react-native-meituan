import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import {Heading3} from '../../widget/Text'
import {screen} from '../../common'

type Props = {
    onPress: Function,
    icon: String,
    title: String
}

export default class HomeMenuItem extends PureComponent<Props> {
    render() {
        const {onPress, icon, title} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
               <Image style={styles.icon} source={icon} resizeMode="contain"></Image>
               <Heading3>{title}</Heading3>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: screen.width / 5,
        height: screen.width / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5
    }
})