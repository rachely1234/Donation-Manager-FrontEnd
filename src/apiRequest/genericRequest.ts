import httpService from "./httpService";




export const addItem = (object:any,route:string) => {
    return httpService.post(object,route);
};

