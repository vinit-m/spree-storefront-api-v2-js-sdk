export declare const authParams: ({ username, password, orderToken, campaign_code }: {
    username: any;
    password: any;
    orderToken?: string;
    campaign_code?: string;
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
