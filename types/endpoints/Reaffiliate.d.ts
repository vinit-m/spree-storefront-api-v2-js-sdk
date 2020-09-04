import Http from '../Http';
import { IQuery } from '../interfaces/Query';
import { ITokenResult } from '../interfaces/Token';
export default class Reaffiliate extends Http {
    verify(id: string, params?: IQuery): Promise<ITokenResult>;
}
