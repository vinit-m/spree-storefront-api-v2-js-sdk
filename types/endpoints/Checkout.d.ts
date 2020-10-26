import Http from '../Http';
import { AddStoreCredit, HandleResponse, NestedAttributes } from '../interfaces/endpoints/CheckoutClass';
import { IOrderResult } from '../interfaces/Order';
import { IPaymentMethodsResult } from '../interfaces/PaymentMethod';
import { IQuery } from '../interfaces/Query';
import { IShippingMethodsResult } from '../interfaces/ShippingMethod';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Checkout extends Http {
    orderNext(token: IToken, params?: IQuery): Promise<IOrderResult>;
    orderUpdate(token: IToken, params: NestedAttributes): Promise<IOrderResult>;
    advance(token: IToken, params?: IQuery): Promise<IOrderResult>;
    complete(token: IToken, params?: IQuery): Promise<IOrderResult>;
    addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>;
    removeStoreCredits(token: IToken, params?: IQuery): Promise<IOrderResult>;
    paymentMethods(token: IToken): Promise<IPaymentMethodsResult>;
    shippingMethods(token: IToken, params?: IQuery): Promise<IShippingMethodsResult>;
    confirmPayment(token: IToken, params?: IQuery): Promise<ITokenResult>;
    handleResponse(token: IToken, params: HandleResponse): Promise<ITokenResult>;
}
