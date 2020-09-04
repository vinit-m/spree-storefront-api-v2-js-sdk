import Account from './endpoints/Account';
import Address from './endpoints/Address';
import Authentication from './endpoints/Authentication';
import Braintree from './endpoints/Braintree';
import Cart from './endpoints/Cart';
import Checkout from './endpoints/Checkout';
import Countries from './endpoints/Countries';
import Order from './endpoints/Order';
import Products from './endpoints/Products';
import Reaffiliate from './endpoints/Reaffiliate';
import Taxons from './endpoints/Taxons';
export interface IClientConfig {
    host?: string;
    timeout?: number;
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}
declare class Client {
    address: Address;
    braintree: Braintree;
    products: Products;
    taxons: Taxons;
    countries: Countries;
    cart: Cart;
    checkout: Checkout;
    authentication: Authentication;
    account: Account;
    order: Order;
    reaffiliate: Reaffiliate;
    private host?;
    private timeout?;
    private onSuccess?;
    private onError?;
    constructor(config?: IClientConfig);
    private addEndpoints;
}
export default Client;
