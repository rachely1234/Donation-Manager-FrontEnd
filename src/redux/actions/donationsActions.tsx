import { PayloadAction } from "@reduxjs/toolkit";
import { DonationFormValue } from "../../interfaces/inputFiledProps"
import { log } from "console";


export const getItem = (state: { donations: DonationFormValue[] }, action: PayloadAction<DonationFormValue>) => {
  state.donations.push(action.payload);
};


export const addItem = (state: { donations: DonationFormValue[]; ID: number }, action: PayloadAction<DonationFormValue>) => {
  state.donations.push(action.payload);
  state.ID++;
};



export const editItem = (state: { donations: DonationFormValue[] }, action: PayloadAction<DonationFormValue>) => {
  const donationId = action.payload.donationId;
  const index = state.donations.findIndex((donation) => donation.donationId === donationId);

  if (index > -1) {
    state.donations[index] = { ...action.payload };
  }
};




export const findItemById = (state: { donationIDToEdit: number | null }, action: PayloadAction<number>) => {
  state.donationIDToEdit = action.payload;
};



export const changeEditMode = (state: { isEditMode: boolean }) => {
  state.isEditMode = !state.isEditMode;
};




export const toggleFormVisibility = (state: { isFormVisible: boolean }) => {
  state.isFormVisible = !state.isFormVisible;
};




