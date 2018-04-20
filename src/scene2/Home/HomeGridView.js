// @flow

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {color} from '../../widget'
import {screen} from '../../common'
import HomeGridItem from './HomeGridItem'

type Props = {
    infos: Array<Object>,
    onGridSelected: Function,
}

const colors = ["#55a40f", "#ff3f0d", "#f742a0"]
export default class HomeGridView extends PureComponent<Props> {

    static defaultProps = {
        infos: []
    }

    render() {
        const { infos, onGridSelected } = this.props
        return (
            <View style={styles.container}>
                {infos.map((info, index) => {
                    return (
                        <HomeGridItem 
                            key={index}
                            info={info} 
                            color={colors[index]}
                            onPress={() => onGridSelected(index)} 
                        />
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
        justifyContent: 'space-between',
        borderColor: color.border,
        borderTopWidth: screen.onePixel,
        borderBottomWidth: screen.onePixel
    }
})
