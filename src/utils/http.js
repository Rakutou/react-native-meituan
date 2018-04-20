import axios from 'axios';
// import store from '../store';

class Http {

    async customFetch(type, ...args) {
        // const state = store.getState();
        // if (!state.system.isNetworkConnected) {
        //     throw new Error('NETWORK_UNVAILABLE');
        // }

        try {
            const response = await axios[type](...args);
            console.info(`${type}成功`, args[0], response);
            return response.data;
        } catch (e) {
            console.info(`${type}失败`, args[0], e.response && e.response.status);
            throw e;
        }
    }

    async get(url) {
        return this.customFetch('get', url);
    }

}

export default new Http();
