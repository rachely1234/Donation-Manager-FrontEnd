import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { log } from 'console';
import { EnumType } from 'typescript';
import Button from './Button';
import donationForm from '../css/donationForm.module.css'
import { addDonation } from '../redux/reducers/donationsReducer';
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import donationLIst from '../css/donationLIst.module.css'
import {FormValues,EntityType,CurrencyType} from "../interfaces/inputFiledProps";
import {changeEdit,isViewForm} from '../redux/reducers/donationsReducer';
import InputField from './InputField';

interface Props {
    details:FormValues,

}


const DonationDetail: React.FC <Props>= ({details}) => {

    const dispatch = useDispatch();
    const changeEditMode = useSelector((state: any) => state.donation.isEditMode);
    const isFormVisible  = useSelector((state: any) => state.donation.isFormVisible);



    const handleEditClick = () => {

        dispatch(isViewForm(isFormVisible))
        
    }


    return (
        <div className={donationLIst.DonationListContainer}>
            <div className={donationLIst.DonationDetails}>
                <p>{details.entityName}</p>
                <p> {details.donationAmount}</p>
            </div>
            <div className={donationLIst.ActionButtons}>
                <ModeEditOutlineOutlinedIcon onClick={handleEditClick} aria-label="edit" />
                <DeleteOutlineOutlinedIcon arial-label="delete" />
                <div style={{
                    borderLeft: '1px solid black',
                    height: '20px',
                    margin: '0 10px'
                }} />
   
                <KeyboardArrowDownOutlinedIcon color ='primary'/>
            </div>






        </div>


    );
};

export default DonationDetail;
