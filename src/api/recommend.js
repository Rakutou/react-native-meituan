import http from '../utils/http';
import Api from '../api.js';

export async function fetchRecommendList(pageNo=1, pageSize=20) {
    const url = Api.recommend;
    return http.get(url);
}
