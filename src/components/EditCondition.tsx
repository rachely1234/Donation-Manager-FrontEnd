

import React, { useState } from 'react';
import DonationForm from './DonationForm';
import DonationDetailList from './DonationDetailList';
import { useDispatch, useSelector } from 'react-redux';
import { changeEdit, isViewForm } from '../redux/reducers/donationsReducer';
import editCondition from '../css/editCondition.module.css'

const DonationPage: React.FC = () => {

  const dispatch = useDispatch();

  const changeEditMode = useSelector((state: any) => state.donation.isEditMode);
  const isFormVisible = useSelector((state: any) => state.donation.isFormVisible);

  const handleDonationFormSubmit = (data: any) => {

    dispatch(isViewForm(isFormVisible));
    dispatch(changeEdit(changeEditMode));

  };

  return (
    <div>
      {isFormVisible && !changeEditMode && (
        <DonationForm onSubmit={handleDonationFormSubmit} />
      )}

      {changeEditMode && !isFormVisible && (
        <div>
          <DonationDetailList />

        </div>
      )}

      {changeEditMode && isFormVisible && (
        <div className={editCondition.container }>
          <DonationDetailList />
          <DonationForm onSubmit={handleDonationFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default DonationPage;

