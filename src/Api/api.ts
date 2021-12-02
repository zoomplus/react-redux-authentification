import Axios from "axios";

export const api = Axios.create({
    baseURL: 'https://populardistribution.backendless.app/api/',
    headers: {
        'Authorization': window.localStorage.getItem('token') ?? ''
    }
});