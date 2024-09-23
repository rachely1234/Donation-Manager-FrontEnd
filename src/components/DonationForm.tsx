import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from './InputField';
import Button from './Button';
import donationForm from '../css/donationForm.module.css'
import inputFiled from '../css/inputFiled.module.css';
import { addItem } from '../apiRequest/genericRequest';

import { addDonation, editDonation } from '../redux/reducers/donationsReducer';
import { DonationFormValue, EntityType, CurrencyType } from "../interfaces/inputFiledProps"
import { isViewForm } from '../redux/reducers/donationsReducer';


interface DonationFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;

}

const DonationForm: React.FC<DonationFormProps> = ({ onSubmit, initialData }) => {

  const dispatch = useDispatch();
  const donationDetails = useSelector((state: any) => state.donation.donations);
  const changeEditMode = useSelector((state: any) => state.donation.isEditMode);
  const isFormVisible = useSelector((state: any) => state.donation.isFormVisible);
  const donationIDToEdit = useSelector((state: any) => state.donation.donationIDToEdit);
  const currentDonationId = useSelector((state: any) => state.donation.ID);

  let editingDonation = donationDetails.find((d: any) => d.donationId == donationIDToEdit)




  const checkFormValidity = () => {
    if (
      !DonationFormValue.entityName ||
      !DonationFormValue.donationAmount ||
      DonationFormValue.entityType === EntityType.Null ||
      !DonationFormValue.donationTarget ||
      DonationFormValue.currencyType === CurrencyType.Null ||
      !DonationFormValue.conversionRate
    ) {
      return false; 
    }
    return true; 
  };



  useEffect(() => {
    if (changeEditMode && editingDonation) {
      updateDonationFormValues((prevValues) => ({
        ...prevValues,
        entityName: editingDonation.entityName,
        entityType: editingDonation.entityType,
        donationTarget: editingDonation.donationTarget,
        currencyType: editingDonation.currencyType,
        conversionRate: editingDonation.conversionRate,
        donationId: editingDonation.donationId
      }));
    }
  }, [changeEditMode, editingDonation]);



  const [DonationFormValue, updateDonationFormValues] = useState<DonationFormValue>({
    donationId: 0,
    entityName: '',
    donationAmount: '',
    entityType: EntityType.Null,
    donationTarget: '',
    conditionForDonation: '',
    currencyType: CurrencyType.Null,
    conversionRate: ''
  });


  const handleSubmitbtn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkFormValidity()) {
      alert("Please fill out all required fields.");
      return;
    }
    updateDonationFormValues((prevValues) => ({
      ...prevValues,

    }));

    const validAmount = /^\d+(\.\d+)?$/;
    if (validAmount.test(DonationFormValue.donationAmount) || DonationFormValue.donationAmount === '') {
      try {

        if (changeEditMode) {

          dispatch(editDonation(DonationFormValue))
          dispatch(isViewForm(isFormVisible))
        }


        else {
          dispatch(addDonation(DonationFormValue));


        }
        await addItem(DonationFormValue, 'donation');

        onSubmit(DonationFormValue);


      } catch (error) {
        console.error("Dispatch error:", error);
      }
    } else {
      alert("Validation error with donation amount");
    }

  };


  const resetForm = async (e: React.FormEvent) => {


    updateDonationFormValues(() => ({
      donationId: 0,
      entityName: '',
      donationAmount: '',
      entityType: EntityType.Null,
      donationTarget: '',
      conditionForDonation: '',
      currencyType: CurrencyType.Null,
      conversionRate: ''

    }));

  };



  const handleInputChange = useCallback((field: string, value: string | number) => {
    updateDonationFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  }, [updateDonationFormValues]);


  const handleDonationAmountChange = (value: string) => {

    const validAmount = /^\d+(\.\d+)?$/;

    if (validAmount.test(value) || value == '' || value[value.length - 1] == '.') {

      updateDonationFormValues((prevValues) => ({
        ...prevValues,
        ["donationAmount"]: value,
        ["donationId"]: currentDonationId,
      }));

    } else {


    }
  }


  const handleEntityNameChange = (value: string) => {

    const regex = /^[A-Za-zא-ת\s]*$/;

    if (regex.test(value)) {

      updateDonationFormValues((prevValues) => ({
        ...prevValues,
        ["entityName"]: value,
      }));

    } else {


      alert("validation error")
    }
  }

  return (
    <form className={changeEditMode ? donationForm.editModeForm : donationForm.defaultForm}>
      {!changeEditMode ? (
        <div>
          <h2>הוספת דיווח על עמותה</h2>
        </div>
      ) : null}
      <div className={changeEditMode ? donationForm.headerOnputsEditMode : donationForm.headerOnputs} >
        <InputField entityName='entityName' isRequired={true} label="שם הישות המדינית הזרה" type="text" value={DonationFormValue.entityName} className={changeEditMode ? donationForm.largeInput : inputFiled.smallInput} onChange={(e) => handleEntityNameChange(e.target.value)} />
        <InputField entityName='donamtionAmount' isRequired={true} label="סכום התרומה בש" type="text" value={DonationFormValue.donationAmount} className={changeEditMode ? donationForm.largeInput : inputFiled.smallInput} onChange={(e) => handleDonationAmountChange(e.target.value)} />
        <InputField className={changeEditMode ? donationForm.largeInput : inputFiled.largeInput} entityName='entityType' isRequired={true} label="סוג הישות המדינית הזרה" type="select"
          options={Object.values(EntityType).map((type) => ({ value: type, label: type }))}
          value={DonationFormValue.entityType} onChange={(e) => handleInputChange('entityType', e.target.value)} />
      </div>
      <InputField entityName='donationTarget' isRequired={true} label="ייעוד התרומה" type="text" value={DonationFormValue.donationTarget} className={donationForm.largeInput} onChange={(e) => handleInputChange('donationTarget', e.target.value)} />
      <InputField entityName='conditionForDonation' isRequired={false} label="התנאים לתרומה" type="text" value={DonationFormValue.conditionForDonation} className={donationForm.largeInput} onChange={(e) => handleInputChange('conditionForDonation', e.target.value)} />
      <div className={changeEditMode ? donationForm.headerOnputsEditMode : donationForm.lastInputs}>
        <InputField entityName='cornType' isRequired={true} label="סוג מטבע" type="select"
          options={Object.values(CurrencyType).map((type) => ({ value: type, label: type }))}

          value={DonationFormValue.currencyType} className={changeEditMode ? donationForm.largeInput : inputFiled.mediumInput} onChange={(e) => handleInputChange('currencyType', e.target.value)} />
        <InputField entityName='conversionRate' isRequired={true} label="שער המרה" type="text" value={DonationFormValue.conversionRate} className={donationForm.largeInput} onChange={(e) => handleInputChange('conversionRate', e.target.value)} />
      </div>
      <div className={donationForm.buttonWrapper}>
        <Button onClick={resetForm} typeButton='button' value='ניקוי' hasBackground={false} />
        <Button onClick={handleSubmitbtn} typeButton='submit' value='שמירה' hasBackground={true} />
      </div>
    </form>
  );
};

export default DonationForm;
