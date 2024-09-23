import interpactor from './Interpactor'


const httpService = {
   
    post: async (object: any, route: string) => {


        try {
            const response = await interpactor.post(route, object);
            return response;
        } catch (error) {
            console.error("HTTP POST error:", error);
            throw error; 
        }

    },

};

export default httpService;