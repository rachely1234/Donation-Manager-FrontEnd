import axios from 'axios';
import interpactor from './Interpactor'


const httpService = {
   
    post: async (object: any, route: string) => {

        console.log("in post function ");

        const response = await interpactor.post(route, object);

    },

};

export default httpService;