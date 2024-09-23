import React from 'react';
import DonationForm from './DonationForm';
import DonationDetailList from './DonationDetailList';
import { useDispatch, useSelector } from 'react-redux';
import { changeEdit, isViewForm } from '../redux/reducers/donationsReducer';
import editCondition from '../css/editCondition.module.css';

const DonationPage: React.FC = () => {
  const dispatch = useDispatch();

 
  const donationState = useSelector((state: any) => ({
    isEditMode: state.donation.isEditMode,
    isFormVisible: state.donation.isFormVisible,
  }));

  const handleDonationFormSubmit = (data: any) => {
    dispatch(isViewForm(donationState.isFormVisible));
    dispatch(changeEdit(donationState.isEditMode));
  };

  return (
    <div>
      {donationState.isFormVisible && !donationState.isEditMode && (
        <DonationForm onSubmit={handleDonationFormSubmit} />
      )}

      {donationState.isEditMode && !donationState.isFormVisible && (
        <DonationDetailList />
      )}

      {donationState.isEditMode && donationState.isFormVisible && (
        <div className={editCondition.container}>
          <DonationDetailList />
          <DonationForm onSubmit={handleDonationFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default DonationPage;
