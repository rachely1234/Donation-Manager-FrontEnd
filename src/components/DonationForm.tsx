import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const DonationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number | string>('');
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, amount, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField isRequired={true}label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField isRequired={true}label="Amount" type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      <InputField isRequired={false} label="Donation Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
     
      <Button typeButton="submit" value="שמירה" hasBackground={true}/>
      <Button typeButton="submit" value="שמירה" hasBackground={false}/>
    </form>
  );
};

export default DonationForm;
