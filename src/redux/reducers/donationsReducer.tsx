import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import {  addItem,changeEditMode,toggleFormVisibility,editItem,findItemById} from '../actions/donationsActions';
import {DonationFormValue,EntityType,CurrencyType} from "../../interfaces/inputFiledProps"


// const initialState: DonationFormValue[] = [];
const initialState: {
    donations: DonationFormValue[]
    isEditMode: boolean
    isFormVisible:boolean
    donationIDToEdit:any
    ID:number

  } = {
    donations: [],
    isEditMode: false,
    isFormVisible:true,
    donationIDToEdit:null,
    ID:0,
  };

const DonarionReducer = createSlice({
    name: "Donation",
    initialState,
    reducers: {
        addDonation: addItem,
        changeEdit:changeEditMode,
        isViewForm:toggleFormVisibility,
        editDonation:editItem,
        donationIDToEditFunc:findItemById,
        

 
    }
});


export const { addDonation,changeEdit,isViewForm,editDonation,donationIDToEditFunc} = DonarionReducer.actions;
export default DonarionReducer.reducer;