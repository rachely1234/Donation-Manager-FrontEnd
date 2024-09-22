import { PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../interfaces/inputFiledProps"


export const getItem = (state: { donations: FormValues[]; isEditMode: boolean; isFormVisible: boolean }, action: { payload: FormValues }) => {
  
    state.donations.push(action.payload);


};

export const addItem = (state: { donations: FormValues[]; isEditMode: boolean; isFormVisible: boolean }, action: { payload: FormValues }) => {
  alert('add item function');
    state.donations.push(action.payload);


};

export const editItem = (state: { donations: FormValues[]; isEditMode: boolean; isFormVisible: boolean }, action: { payload: FormValues }) => {
    const  donationId  = action.payload.donationId;
alert("edit item function");
    const index = state.donations.findIndex((donation) => donation.donationId === donationId);


  if (index !== -1) {
    state.donations[index] = {
      ...state.donations[index],
      ...action.payload, 
    };
  }


};


export const changeEditMode = (state: { donations: FormValues[]; isEditMode: boolean; isFormVisible: boolean }, action: { payload: FormValues }) => {

    state.isEditMode = !(state.isEditMode);

};

export const isFormVisible = (state: { donations: FormValues[]; isEditMode: boolean; isFormVisible: boolean }, action: { payload: FormValues }) => {

    state.isFormVisible = !(state.isFormVisible);

};

