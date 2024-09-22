import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import {  addItem,changeEditMode,isFormVisible,editItem} from '../actions/donationsActions';
import {FormValues,EntityType,CurrencyType} from "../../interfaces/inputFiledProps"


// const initialState: FormValues[] = [];
const initialState: {
    donations: FormValues[]
    isEditMode: boolean
    isFormVisible:boolean
  } = {
    donations: [],
    isEditMode: false,
    isFormVisible:true
  };

const DonarionReducer = createSlice({
    name: "Donation",
    initialState,
    reducers: {
        addDonation: addItem,
        changeEdit:changeEditMode,
        isViewForm:isFormVisible,
        editDonation:editItem,
 
    }
});


export const { addDonation,changeEdit,isViewForm,editDonation} = DonarionReducer.actions;
export default DonarionReducer.reducer;