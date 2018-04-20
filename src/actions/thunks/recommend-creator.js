import {
    refreshRecommendList
} from '../action-creators';

import { fetchRecommendList } from '../../api/recommend'

export function refreshRecommnedListAction() {
    return async (dispatch) => {
        dispatch(refreshRecommendList(true));
        const result = await fetchRecommendList();
        console.log('刷新加载推荐商品列表数据：', result);

        if (result.data.length > 0) {
            dispatch(refreshRecommendList(false, result.data));
        } else {
            dispatch(refreshRecommendList(false));
        }
    }
}
