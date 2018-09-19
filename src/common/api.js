import axios from 'axios';

let BASE_URL

if (process.env.NODE_ENV === 'production') {
    BASE_URL = process.env.REACT_APP_BASE_URL;
} else {
    BASE_URL = 'http://localhost:3333/api/v1';
}

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