import Account from './endpoints/Account'
import Address from './endpoints/Address'
import Authentication from './endpoints/Authentication'
import Braintree from './endpoints/Braintree'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Reaffiliate from './endpoints/Reaffiliate'
import Taxons from './endpoints/Taxons'

export interface IClientConfig {
  host?: string
  timeout?: number
  onSuccess?: (response: any) => void
  onError?: (error: any) => void
}

class Client {
  public address: Address
  public braintree: Braintree
  public products: Products
  public taxons: Taxons
  public countries: Countries
  public cart: Cart
  public checkout: Checkout
  public authentication: Authentication
  public account: Account
  public order: Order
  public reaffiliate: Reaffiliate
  private host?: string
  private timeout?: number
  private onSuccess?: (response: any) => void
  private onError?: (error: any) => void

  constructor(config: IClientConfig = {}) {
    this.host = config.host || null
    this.timeout = config.timeout || null
    this.onSuccess = config.onSuccess || null
    this.onError = config.onSuccess || null
    this.addEndpoints()
  }

  private addEndpoints() {
    this.account = new Account(this.host, this.timeout, this.onSuccess, this.onError)
    this.authentication = new Authentication(this.host, this.timeout, this.onSuccess, this.onError)
    this.cart = new Cart(this.host, this.timeout, this.onSuccess, this.onError)
    this.checkout = new Checkout(this.host, this.timeout, this.onSuccess, this.onError)
    this.countries = new Countries(this.host, this.timeout, this.onSuccess, this.onError)
    this.order = new Order(this.host, this.timeout, this.onSuccess, this.onError)
    this.products = new Products(this.host, this.timeout, this.onSuccess, this.onError)
    this.taxons = new Taxons(this.host, this.timeout, this.onSuccess, this.onError)
    this.address = new Address(this.host, this.timeout, this.onSuccess, this.onError)
    this.braintree = new Braintree(this.host, this.timeout, this.onSuccess, this.onError)
    this.reaffiliate = new Reaffiliate(this.host, this.timeout, this.onSuccess, this.onError)
  }
}

export default Client
