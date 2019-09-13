import Http from '../Http';
import { DownloadLinkAttr, IAccountResult } from '../interfaces/Account';
import { ICreditCardResult, ICreditCardsResult } from '../interfaces/CreditCard';
import { IOrderResult, IOrdersResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IToken, ITokenResult } from '../interfaces/Token';
export default class Account extends Http {
    accountInfo(token: IToken, params?: IQuery): Promise<IAccountResult>;
    creditCardsList(token: IToken, params?: IQuery): Promise<ICreditCardsResult>;
    defaultCreditCard(token: IToken, params?: IQuery): Promise<ICreditCardResult>;
    completedOrdersList(token: IToken, params?: IQuery): Promise<IOrdersResult>;
    completedOrder(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>;
    accountInfoUpdate(token: IToken, params?: IQuery): Promise<ITokenResult>;
    downloads(token: IToken, params?: IQuery): Promise<ITokenResult>;
    getDownloadLink(token: IToken, params: DownloadLinkAttr): Promise<ITokenResult>;
}
