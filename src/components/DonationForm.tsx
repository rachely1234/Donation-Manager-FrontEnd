import React, { useState,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios';
import { log } from 'console';
import { EnumType } from 'typescript';
import InputField from './InputField';
import Button from './Button';
import donationForm from '../css/donationForm.module.css'
import inputFiled from '../css/inputFiled.module.css';
import { addItem } from '../apiRequest/genericRequest';

import { addDonation} from '../redux/reducers/donationsReducer';
// import { addDonation} from '../redux/reducers/donationsReducer';




interface FormValues {
  entityName: string;
  donationAmount: string;
  entityType: EntityType;
  donationTarget: string;
  conditionForDonation: string;
  currencyType: CurrencyType;
  conversionRate: string;
}

enum CurrencyType {

  Null = '',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  ILS = 'ILS'
}

enum EntityType {
  PrivateCompany = 'Private Company',
  Government = 'Government',

}

const DonationForm: React.FC = () => {

  const dispatch = useDispatch();
  const donationDetails = useSelector((state: any) => state);
 

  useEffect(() => {
    console.log("donationDetails updated:", donationDetails);  
  }, [donationDetails]);

  //  const donationDetails = useSelector((state: any) => state.donations);


  const [formValues, setFormValues] = useState<FormValues>({
    entityName: '',
    donationAmount: '',
    entityType: EntityType.Government,
    donationTarget: '',
    conditionForDonation: '',
    currencyType: CurrencyType.Null,
    conversionRate: ''
  });

  
  const handleSubmitbtn = async (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("Form values before dispatch:", formValues); 
  
    const validAmount = /^\d+(\.\d+)?$/;
    if (validAmount.test(formValues.donationAmount) || formValues.donationAmount === '') {
      try {
        dispatch(addDonation(formValues)); 
      } catch (error) {
        console.error("Dispatch error:", error);
      }
    } else {
      alert("Validation error with donation amount");
    }
  
    console.log("Updated donation details:", donationDetails); 
  };
  

  const handleCleanBtn = async (e: React.FormEvent) => {
    alert("click");

    setFormValues(() => ({
      entityName: '',
      donationAmount: '',
      entityType: EntityType.Government,
      donationTarget: '',
      conditionForDonation: '',
      currencyType: CurrencyType.Null,
      conversionRate: ''

    }));

  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handledonationAmount = (value: string) => {

    const validAmount = /^\d+(\.\d+)?$/;


    //בעת שליחת הטופס לא לשכוח לעששטת ולידציה כמו פה לודא שכתבו מספר אחרי הנקודה
    if (validAmount.test(value) || value == '' || value[value.length - 1] == '.') {

      setFormValues((prevValues) => ({
        ...prevValues,
        ["donationAmount"]: value,
      }));

    } else {

      //אם יהיה זמן לממש פה תצוגת שגיאה נורמלית
      alert("validation error")
    }
  }


  const handleChangeEntytyName = (value: string) => {

    const regex = /^[A-Za-zא-ת\s]*$/;

    if (regex.test(value)) {

      setFormValues((prevValues) => ({
        ...prevValues,
        ["entityName"]: value,
      }));

    } else {

      //אם יהיה זמן לממש פה תצוגת שגיאה נורמלית
      alert("validation error")
    }
  }

  return (
    <div className={donationForm.continer}>
      <form >
        <h2>הוספת דיווח על עמותה </h2>
        <div className={donationForm.firstInputs}>
          <InputField   isRequired={true} label="שם הישות המדינית הזרה" type="text" value={formValues.entityName} className={inputFiled.smallInput} onChange={(e) => handleChangeEntytyName(e.target.value)} />
          <InputField isRequired={true} label="סכום התרומה בש" type="text" value={formValues.donationAmount} className={inputFiled.smallInput} onChange={(e) => handledonationAmount(e.target.value)} />
          <InputField isRequired={true} label="שם הישות המדינית הזרה" type="select"
            options={Object.values(EntityType).map((type) => ({ value: type, label: type }))}

            value={formValues.entityType} className={inputFiled.largeInput} onChange={(e) => handleInputChange('currencyType', e.target.value)} />

        </div>
        <InputField isRequired={true} label="ייעוד התרומה" type="text" value={formValues.donationTarget} className={donationForm.largeInput} onChange={(e) => handleInputChange('donationTarget', e.target.value)} />
        <InputField isRequired={false} label="התנאים לתרומה" type="text" value={formValues.conditionForDonation} className={donationForm.largeInput} onChange={(e) => handleInputChange('conditionForDonation', e.target.value)} />
        <div className={donationForm.lastInputs}>
          <InputField isRequired={true} label="סוג מטבע" type="select"
            options={Object.values(CurrencyType).map((type) => ({ value: type, label: type }))}

            value={formValues.currencyType} className={inputFiled.largeInput} onChange={(e) => handleInputChange('currencyType', e.target.value)} />
          <InputField isRequired={true} label="שער המרה" type="text" value={formValues.conversionRate} className={donationForm.largeInput} onChange={(e) => handleInputChange('conversionRate', e.target.value)} />
        </div>
        <Button onClick={handleSubmitbtn} typeButton='submit' value='שמירה' hasBackground={false} />
        <Button onClick={handleCleanBtn} typeButton='button' value='ניקוי' hasBackground={true} />

      </form>
    </div>
  );
};

export default DonationForm;
