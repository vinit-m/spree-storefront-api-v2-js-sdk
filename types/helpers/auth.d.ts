export declare const authParams: ({ username, password, orderToken }: {
    username: any;
    password: any;
    orderToken?: string;
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
