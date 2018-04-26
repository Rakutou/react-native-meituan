/**
 * Created by jason 
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GroupPurchaseCell from '../../scene2/GroupPurchase/GroupPurchaseCell';

export default class Classify extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            分类
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
