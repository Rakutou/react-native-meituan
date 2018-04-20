import { actionTypes } from './action-types';

export function refreshRecommendList(isLoading, dataList) {
    return {
        type: actionTypes.REFRESH_RECOMMEND_LIST,
        isLoading,
        dataList
    }
}


