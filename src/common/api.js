import axios from 'axios';

const BASE_URL = 'http://localhost:3333/api/v1';


class Api {
    constructor() {
        this.axios = axios;
        this.get = this.get.bind(this);
        this.buildUrl = this.buildUrl.bind(this);
    }

    buildUrl(url) {
        return `${BASE_URL}${url}`;
    }

    async get(url) {
        return this.axios.get(this.buildUrl(url));
    }
}

export default new Api();