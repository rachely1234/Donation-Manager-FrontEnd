export enum CurrencyType {

    Null = '',
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    ILS = 'ILS'
}

export enum EntityType {
    Null='',
    PrivateCompany = 'Private Company',
    Government = 'Government',

}


export interface DonationFormValue {
    donationId:number;
    entityName: string;
    donationAmount: string;
    entityType: EntityType;
    donationTarget: string;
    conditionForDonation: string;
    currencyType: CurrencyType;
    conversionRate: string;
}

