import { PayloadAction } from "@reduxjs/toolkit";
import {FormValues} from "../../interfaces/inputFiledProps"


export const deleteItem = (state: FormValues[], action: any) => {
    return {
        ...state,
        data: state.filter((item: any) => item.id !== action.payload),
    };
};


export const addItem = (state: FormValues, action: { payload: FormValues }) => {
    console.log("add item");
    alert("inside add item function")
    debugger
    
    return {
        ...state, 
        ...action.payload, 
    }
};


