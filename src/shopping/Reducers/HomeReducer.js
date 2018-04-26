

import * as types from '../Action/ActionType';

const initialState = {
    HomeList: [],
    UGOList:[], 
    isLoading: true,
    isRefreshing: false,
};

export default homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_HOME_LIST, types.FETCH_SEAUGO_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            });

        case types.RECEIVE_HOME_LIST:
            return Object.assign({}, state, {
                HomeList: action.homeList,
                isRefreshing: false,
                isLoading: false,
            });

        case types.RECEIVE_SEAUGO_LIST:
            return Object.assign({}, state, {
                UGOList: action.uGoList,
                isRefreshing: false,
                isLoading: false,
            });

        default:
            return state;
    }
}
