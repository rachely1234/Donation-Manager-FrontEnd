import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import inputFiled from '../css/inputFiled.module.css';
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import donationLIst from '../css/donationLIst.module.css'
import donationForm from '../css/donationForm.module.css'
import { DonationFormValue, EntityType, CurrencyType } from "../interfaces/inputFiledProps"
import DonationDetail from './DonationDetail';
import { changeEdit, isViewForm } from '../redux/reducers/donationsReducer';

const DonationDetailList: React.FC = () => {
    const Id = useSelector((state: any) => state.donation.ID) - 1;
    const dispatch = useDispatch();
    const donationDetails = useSelector((state: any) => state.donation.donations);
    const donationIDToEdit = useSelector((state: any) => state.donation.donationIDToEdit);
    const changeEditMode = useSelector((state: any) => state.donation.isEditMode);
    const isFormVisible = useSelector((state: any) => state.donation.isFormVisible);


    const handleAddDonation = () => {
        dispatch(changeEdit(changeEditMode));
        dispatch(isViewForm(isFormVisible));

    }


    return (
        <div >
            <form className={changeEditMode && isFormVisible ? donationLIst.editModeBackground : donationLIst.defaultBackground}>

                {Array.isArray(donationDetails) && donationDetails.length > 0 ? (
                    donationDetails
                        .filter(donation => !isFormVisible || donation.donationId === Id)
                        .map((donation: DonationFormValue, index: number) => (
                            <DonationDetail key={donation.donationId} details={donation} />
                        ))
                ) : (
                    <p>No donations available.</p>
                )}
                {!isFormVisible && (
                    <div className={donationForm.buttonWrapper}>
                        <Button onClick={handleAddDonation} typeButton='button' value='הוספת תרומה' hasBackground={true} />
                    </div>
                )}

            </form >
        </div >

    );
};

export default DonationDetailList;
