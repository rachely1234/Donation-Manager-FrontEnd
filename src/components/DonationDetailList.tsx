import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EnumType } from 'typescript';
import InputField from './InputField';
import Button from './Button';
import inputFiled from '../css/inputFiled.module.css';
import { addItem } from '../apiRequest/genericRequest';

import { addDonation } from '../redux/reducers/donationsReducer';

import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import donationLIst from '../css/donationLIst.module.css'
import { FormValues, EntityType, CurrencyType } from "../interfaces/inputFiledProps"
import DonationDetail from './DonationDetail';
import {changeEdit,isViewForm} from '../redux/reducers/donationsReducer';

const DonationDetailList: React.FC = () => {

    const dispatch = useDispatch();
    const donationDetails = useSelector((state: any ) => state.donation.donations);
    const changeEditMode = useSelector((state: any) => state.donation.isEditMode);
    const isFormVisible = useSelector((state: any) => state.donation.isFormVisible);




    const handleAddDonation=()=>{
        alert("from add donation")
        dispatch(changeEdit(changeEditMode));
        dispatch(isViewForm(isFormVisible));

    }

    return (
        <div>
        <form>

        {Array.isArray(donationDetails) && donationDetails.length > 0? (
            donationDetails.map((donation: FormValues, index: number) => (
                <DonationDetail details={donation}  />

            ))
        ) : (
            <p>No donations available.</p>
        )}
  
        <Button onClick={handleAddDonation} typeButton='button' value='הוספת תרומנ ' hasBackground={true} />
        </form>
    </div>

    );
};

export default DonationDetailList;
