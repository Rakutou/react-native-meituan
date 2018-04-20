// @flow

import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color} from '../../widget'

type Props = {
    titles: Array<string>,
    typeIndex: number,
    onSelected: Function
}

type State = {
    selectedIndex: number
}

export default class NearbyHeaderView extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            selectedIndex: props.typeIndex
        }
    }

    textColor(index: number): Object {
        let { selectedIndex } = this.state
        let bgColor = selectedIndex === index ? '#fff' : '#FE566D'
        return { color: bgColor }
    }

    bgColor(index: number): Object {
        let { selectedIndex } = this.state
        let bgColor = selectedIndex === index ? '#FE566D' : '#fff'
        return { backgroundColor: bgColor }
    }

    render() {
        const { titles, onSelected } = this.props
        return (
            <View style={styles.container}>
                {titles.map((title, index) => {
                    return (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => {
                                this.setState({selectedIndex: index})
                                onSelected && onSelected(index)
                            }}
                            style={[styles.item, this.bgColor(index)]}>
                            <Paragraph style={this.textColor(index)}>{title}</Paragraph>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 6
    },
    item: {
        marginLeft: 8,
        marginBottom: 8,
        width: screen.width / 4 - 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: color.border,
        borderWidth: screen.onePixel
    }
})

