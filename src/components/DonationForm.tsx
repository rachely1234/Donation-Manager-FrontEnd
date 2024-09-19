import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

import donationForm from '../css/donationForm.module.css'
import inputField from '../css/inputFiled.module.css';
import { EnumType } from 'typescript';

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

  Null='',
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

  const [formValues, setFormValues] = useState<FormValues>({
    entityName: '',
    donationAmount: '',
    entityType: EntityType.Government,
    donationTarget: '',
    conditionForDonation: '',
    currencyType: CurrencyType.Null,
    conversionRate: ''
  });


  const handleSubmitbtn = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCleanBtn = (e: React.FormEvent) => {
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
      <form onSubmit={handleSubmitbtn}>
        <h2>הוספת דיווח על עמותה </h2>
        <div className={donationForm.firstInputs}>
          <InputField isRequired={true} label="שם הישות המדינית הזרה" type="text" value={formValues.entityName} onChange={(e) => handleChangeEntytyName(e.target.value)} className={donationForm.smallInput} />
          <InputField isRequired={true} label="סכום התרומה בש" type="text" value={formValues.donationAmount} className={donationForm.largeInput} onChange={(e) => handledonationAmount(e.target.value)} />
          <InputField
            isRequired={true}
            label="סוג הישות המדינית הזרה"
            type="select"
            options={Object.values(EntityType).map((type) => ({ value: type, label: type }))}
            value={formValues.entityType}
            className={donationForm.largeInput}
            onChange={(e) => handleInputChange('entityType', e.target.value)}
          />
        </div>
        <InputField isRequired={true} label="ייעוד התרומה" type="text" value={formValues.donationTarget} className={donationForm.largeInput} onChange={(e) => handleInputChange('donationTarget', e.target.value)} />
        <InputField isRequired={false} label="התנאים לתרומה" type="text" value={formValues.conditionForDonation} className={donationForm.largeInput} onChange={(e) => handleInputChange('conditionForDonation', e.target.value)} />
        <div className={donationForm.lastInputs}>
          <InputField isRequired={true} label="סוג מטבע" type="select"
            options={Object.values(CurrencyType).map((type) => ({ value: type, label: type }))}

            value={formValues.currencyType} className={donationForm.largeInput} onChange={(e) => handleInputChange('currencyType', e.target.value)} />
          <InputField isRequired={true} label="שער המרה" type="text" value={formValues.conversionRate} className={donationForm.largeInput} onChange={(e) => handleInputChange('conversionRate', e.target.value)} />
        </div>
        <Button onClick={handleSubmitbtn} typeButton='submit' value='שמירה' hasBackground={false} />
        <Button onClick={handleCleanBtn} typeButton='button' value='ניקוי' hasBackground={true} />

      </form>
    </div>
  );
};

export default DonationForm;
