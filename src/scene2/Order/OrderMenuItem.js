import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Heading3} from '../../widget/Text'
import {screen, system} from '../../common'

type Props = {
    icon: string,
    title: string,
    onPress: Function
}

export default class OrderMenuItem extends PureComponent<Props> {
    render() {
        const {icon, title, onPress} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={icon} style={styles.icon} resizeMode="contain"/>
                <Heading3>{title}</Heading3>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 5
    }
})

