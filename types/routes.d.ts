export declare const Routes: {
    productsPath: () => string;
    productPath: (id: string) => string;
    taxonsPath: () => string;
    taxonPath: (id: string) => string;
    countriesPath: () => string;
    countryPath: (iso: string) => string;
    cartPath: () => string;
    cartAddItemPath: () => string;
    cartRemoveItemPath: (id: string) => string;
    cartEmptyPath: () => string;
    cartSetItemQuantity: () => string;
    cartApplyCodePath: () => string;
    cartRemoveCodePath: (code?: string) => string;
    cartEstimateShippingMethodsPath: () => string;
    checkoutPath: () => string;
    checkoutNextPath: () => string;
    checkoutAdvancePath: () => string;
    checkoutCompletePath: () => string;
    checkoutAddStoreCreditsPath: () => string;
    checkoutRemoveStoreCreditsPath: () => string;
    checkoutPaymentMethodsPath: () => string;
    checkoutShippingMethodsPath: () => string;
    oauthTokenPath: () => string;
    registerPath: () => string;
    accountPath: () => string;
    accountCreditCardsPath: () => string;
    accountDefaultCreditCardPath: () => string;
    accountCompletedOrdersPath: () => string;
    accountCompletedOrderPath: (orderNumber: string) => string;
    orderStatusPath: (orderNumber: string) => string;
    forgetPasswordPath: () => string;
    resetPasswordPath: () => string;
    updatePasswordPath: () => string;
    accountInfoUpdatePath: () => string;
};
