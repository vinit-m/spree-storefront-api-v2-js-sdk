import { GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddStoreCredit, HandleResponse, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IOrderResult } from '../interfaces/Order'
import { IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import { IQuery } from '../interfaces/Query'
import { IShippingMethodsResult } from '../interfaces/ShippingMethod'
import {IToken, ITokenResult} from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http {
  public async orderNext(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.checkoutNextPath(), token, params) as IOrderResult
  }

  public async orderUpdate(token: IToken, params: NestedAttributes): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.checkoutPath(), token, params) as IOrderResult
  }

  public async advance(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.checkoutAdvancePath(), token, params) as IOrderResult
  }

  public async complete(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.checkoutCompletePath(), token, params) as IOrderResult
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>  {
    return await this.spreeResponse(POST, Routes.checkoutAddStoreCreditsPath(), token, params) as IOrderResult
  }

  public async removeStoreCredits(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(POST, Routes.checkoutRemoveStoreCreditsPath(), token, params) as IOrderResult
  }

  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult> {
    return await this.spreeResponse(GET, Routes.checkoutPaymentMethodsPath(), token) as IPaymentMethodsResult
  }

  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse(GET, Routes.checkoutShippingMethodsPath(), token, params) as IShippingMethodsResult
  }

  public async confirmPayment(token: IToken, params: IQuery = {}): Promise<ITokenResult> {
    return await this.spreeResponse(PATCH, Routes.confirmPayment(), token, params) as ITokenResult
  }

  public async handleResponse(token: IToken, params: HandleResponse): Promise<ITokenResult> {
    return await this.spreeResponse(PATCH, Routes.handleResponse(), token, params) as ITokenResult
  }
}
