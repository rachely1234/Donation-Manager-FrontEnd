import { configureStore } from "@reduxjs/toolkit";

import donationReducer from "./reducers/donationsReducer";
export const store = configureStore({
    reducer: {
        donation: donationReducer,
        
        
    }   
});
export default store;