const storefrontPath = `api/v2/storefront`

export const Routes = {
  productsPath: () => `${storefrontPath}/products`,
  productPath: (id: string) => `${storefrontPath}/products/${id}`,
  taxonsPath: () => `${storefrontPath}/taxons`,
  taxonPath: (id: string) => `${storefrontPath}/taxons/${id}`,
  countriesPath: () => `${storefrontPath}/countries`,
  countryPath: (iso: string) => `${storefrontPath}/countries/${iso}`,
  cartPath: () => `${storefrontPath}/cart`,
  cartAddItemPath: () => `${storefrontPath}/cart/add_item`,
  cartRemoveItemPath: (id: string) => `${storefrontPath}/cart/remove_line_item/${id}`,
  cartEmptyPath: () => `${storefrontPath}/cart/empty`,
  cartSetItemQuantity: () => `${storefrontPath}/cart/set_quantity`,
  cartApplyCodePath: () => `${storefrontPath}/cart/apply_coupon_code`,
  cartRemoveCodePath: (code?: string) => `${storefrontPath}/cart/remove_coupon_code/${code}`,
  cartEstimateShippingMethodsPath: () => `${storefrontPath}/cart/estimate_shipping_rates`,
  checkoutPath: () => `${storefrontPath}/checkout`,
  checkoutNextPath: () => `${storefrontPath}/checkout/next`,
  checkoutAdvancePath: () => `${storefrontPath}/checkout/advance`,
  checkoutCompletePath: () => `${storefrontPath}/checkout/complete`,
  checkoutAddStoreCreditsPath: () => `${storefrontPath}/checkout/add_store_credit`,
  checkoutRemoveStoreCreditsPath: () => `${storefrontPath}/checkout/remove_store_credit`,
  checkoutPaymentMethodsPath: () => `${storefrontPath}/checkout/payment_methods`,
  checkoutShippingMethodsPath: () => `${storefrontPath}/checkout/shipping_rates`,
  oauthTokenPath: () => `spree_oauth/token`,
  // Register API route, Delete Account
  registerPath: () => `user_account`,
  accountPath: () => `${storefrontPath}/account`,
  accountCreditCardsPath: () => `${storefrontPath}/account/credit_cards`,
  accountDefaultCreditCardPath: () => `${storefrontPath}/account/credit_cards/default`,
  accountCompletedOrdersPath: () => `${storefrontPath}/account/orders`,
  accountCompletedOrderPath: (orderNumber: string) => `${storefrontPath}/account/orders/${orderNumber}`,
  orderStatusPath: (orderNumber: string) => `${storefrontPath}/order_status/${orderNumber}`,
  // Forget Password API route
  forgetPasswordPath: () => `password/forgot`,
  // Reset Password API route
  resetPasswordPath: () => `password/reset`,
  // Change Password API route
  updatePasswordPath: () => `password/update`,
  // Update User Info API route
  accountInfoUpdatePath: () => `${storefrontPath}/account/edit`,
  // Address API route
  addressPath: () => `addresses`,
  // Update Tax Zone API route
  updateTaxZone: () => `set_tax_zone`,
  // Braintree client token API route
  braintreeClient: () => 'api/v1/braintree_client_token',
  // User Downloads API route
  downloads: () => `${storefrontPath}/account/downloads`,
  // Payment Fail API route
  paymentFailedPath: () => `${storefrontPath}/cart/partial_payment_failed`,
}
