import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import donationLIst from '../css/donationLIst.module.css';
import { DonationFormValue, EntityType, CurrencyType } from "../interfaces/inputFiledProps";
import { isViewForm, donationIDToEditFunc } from '../redux/reducers/donationsReducer';

interface Props {
    details: DonationFormValue,

}


const DonationDetail: React.FC<Props> = ({ details }) => {

    const dispatch = useDispatch();
    const isFormVisible = useSelector((state: any) => state.donation.isFormVisible);


    const handleEditClick = () => {

        dispatch(isViewForm(isFormVisible))
        dispatch(donationIDToEditFunc(details.donationId));

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
                {isFormVisible ? <KeyboardArrowUpOutlinedIcon color='primary' /> :
                    <KeyboardArrowDownOutlinedIcon color='primary' />
                }
            </div>

        </div>


    );
};

export default DonationDetail;
