import React from 'react';
import {
  Image,
  View,
  Text,
  Animated,
  Dimensions,
  InteractionManager
} from 'react-native';
import { NavigationActions } from 'react-navigation';
const { height, width } = Dimensions.get('window');

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bottom: new Animated.Value(0)
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
     this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Tab'})]
          })
        );
      });
    }, 2000);

    Animated.timing(
      this.state.bottom,
      {
        toValue: -width,
        duration: 2000
      }
    ).start();
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
 
  render() {
    return (
      <Animated.View style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: this.state.bottom
      }}>
        <Image
          style={{flex: 1, width: width, height: height}}
          source={require('../Img/10.png')}
        />
      </Animated.View>
    );
  }
}
export default Splash;
