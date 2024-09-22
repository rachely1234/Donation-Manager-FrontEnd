import axios from 'axios';
import interpactor from './Interpactor'


const httpService = {
   
    post: async (object: any, route: string) => {

      

        const response = await interpactor.post(route, object);

    },

};

export default httpService;