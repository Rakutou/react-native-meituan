import { actionTypes } from '../actions/action-types';

const initState = {
    dataList: [],
    isLoading: false
};

export default function recommendList(state=initState, action){
    switch (action.type) {
        case actionTypes.REFRESH_RECOMMEND_LIST:
            return action.dataList ?
                {
                    ...state,
                    isLoading: false,
                    dataList: action.dataList
                } : { ...state, isLoading: action.isLoading };

        default:
            return state;
    }
}
