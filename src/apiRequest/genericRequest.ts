import httpService from "./httpService";
const http="https://localhost:7131"

export const getItemById = (route:string, id:string) => {
    return httpService.get(`${http}/${route}/${id}`);
};

export const getAllItems = (route:string) => {
    console.log("generic request");
    return httpService.get(route);

};


export const deleteItem = (route:string, id:string) => {
    return httpService.delete(`${http}/${route}/${id}`);
};

export const addItem = (object:any,route:string) => {
    return httpService.post(object,route);
};

export const updateItem = (route:string, id:string, destination:string) => {
    return httpService.put(`${http}/${route}/${id}/${destination}`,);
};