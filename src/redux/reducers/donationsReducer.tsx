import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import {  addItem,deleteItem} from '../actions/donationsActions';
import {FormValues,EntityType,CurrencyType} from "../../interfaces/inputFiledProps"

const initialState: FormValues = {
    
    entityName: '',
    donationAmount: '',
    entityType: EntityType.Null,
    donationTarget: '',
    conditionForDonation: '',
    currencyType: CurrencyType.Null,
    conversionRate: '',
};

const DonarionReducer = createSlice({
    name: "Donation",
    initialState,
    reducers: {
        addDonation: addItem,
 
    }
});


export const { addDonation} = DonarionReducer.actions;
export default DonarionReducer.reducer;