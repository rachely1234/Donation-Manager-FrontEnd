import httpService from "./httpService";




export const addItem = async (object: any, route: string) => {
    try {
        const response = await httpService.post(object, route);
        return response; 
    } catch (error) {
        console.error("Error adding item:", error);
        throw error; 
    }
};