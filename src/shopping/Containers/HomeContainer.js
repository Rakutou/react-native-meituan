/**
 * Created by jason
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../Components/Home';
import { HomeAction } from '../Action/HomeAction';

class HomeContainer extends React.PureComponent {
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    render() {
        return (
            <Home {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    HomeReducer: state.HomeReducer
});

const mapDispatchToProps = (dispatch) => ({
    HomeAction: bindActionCreators(HomeAction, dispatch)
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HomeContainer);