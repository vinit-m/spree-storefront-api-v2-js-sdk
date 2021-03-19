export declare const authParams: ({ username, password, orderToken, campaign_code, cookie_id, cookies_data }: {
    username: any;
    password: any;
    orderToken?: string;
    campaign_code?: string;
    cookie_id?: string;
    cookies_data?: any[];
}) => {
    username: any;
    password: any;
    grant_type: string;
};
export declare const refreshParams: ({ refresh_token }: {
    refresh_token: any;
}) => {
    refresh_token: any;
    grant_type: string;
};
export declare const registerParams: (params: any) => {
    user: any;
};
