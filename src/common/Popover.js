import React, { Component } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

const { height: SCREEN_H, width: SCREEN_W } = Dimensions.get('window');

class Popover componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentSize: {},
            anchorPoint: {},
            popoverOrigin: {},
            placement: 'auto',
            isTransitioning: false,
            defaultAnimatedValues: {
                scale: new Animated.Value(0),
                translate: new Animated.ValueXY(),
                fade: new Animated.Value(0)
            }
        }
    }

    measureContent(e) {
        const { width, height } = e.nativeEvent.layout;
        const contentSize = { width, height };
        const geom = this.computeGeometry({contentSize});
        this.setState(Object.assign(geom, { contentSize }), () => {

        });
    }

    computeGeometry({contentSize, placement}) {
        placement = placement || this.props.placement;
        const { displayArea, } = this.props;
        const options = {
            displayArea: this.props.displayArea,
            fromRect: this.props.fromRect,
            arrowSize: this.getArrowSize(placement),
            contentSize
        }

        switch (placement) {
            case 'top': return this.computeTopGeometry(options);
            case 'bottom': return this.computeBottomGeometry(options);
            case 'left': return this.computeLeftGeometry(options);
            case 'right': return this.computeRightGeometry(options);
            default: 
                break;
        } 
    }

    computeTopGeometry() {

    }

    computeRightGeometry() {

    }

    computeBottomGeometry() {

    }

    computeLeftGeometry() {

    }

    getArrowSize(placement) {

    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
  }
}


const styles = StyleSheet.create({
    
});

Popover.propTypes = {
    onClose: PropTypes.func,
    placement: PropTypes.string,
    contentStyle: View.propTypes.style,
    fromRect: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
};

Popover.defaultProps = {
    isVisible: false,
    onClose: () => {},
    placement: 'auto',
    arrowSize: new Size(10, 5),
    displayArea: new Rect(0, 0, SCREEN_W, SCREEN_H)
};

export default Popover;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}