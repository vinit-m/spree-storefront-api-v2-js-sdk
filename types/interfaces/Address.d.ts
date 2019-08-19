export interface AddAddressAttr {
    address_type: string;
    firstname: string;
    lastname: string;
    address1: string;
    address2?: string;
    country_id: string;
    state_id: string;
    city: string;
    zipcode: string;
    phone: string;
    company_name?: string;
    company_vat_id?: string;
    company_reg_no?: string;
}
