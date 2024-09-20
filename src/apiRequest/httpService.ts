import axios from 'axios';
import interpactor from './Interpactor'


const httpService = {
    get: async (url: string) => {

        return axios.get(url);
    },
    put: async (url: string) => {
        return axios.put(url);
    },
    post: async (object: any, route: string) => {

        console.log("in post function ");

        const response = await interpactor.post(route, object);

    },
    delete: async (url: string) => {
        return axios.delete(url);
    }
};

export default httpService;