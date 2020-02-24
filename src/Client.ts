import Account from './endpoints/Account'
import Address from './endpoints/Address'
import Authentication from './endpoints/Authentication'
import Braintree from './endpoints/Braintree'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'

export interface IClientConfig {
  host?: string
  timeout?: number
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
  private host?: string
  private timeout?: number

  constructor(config: IClientConfig = {}) {
    this.host = config.host || null
    this.timeout = config.timeout || null
    this.addEndpoints()
  }

  private addEndpoints() {
    this.account = new Account(this.host, this.timeout)
    this.authentication = new Authentication(this.host, this.timeout)
    this.cart = new Cart(this.host, this.timeout)
    this.checkout = new Checkout(this.host, this.timeout)
    this.countries = new Countries(this.host, this.timeout)
    this.order = new Order(this.host, this.timeout)
    this.products = new Products(this.host, this.timeout)
    this.taxons = new Taxons(this.host, this.timeout)
    this.address = new Address(this.host, this.timeout)
    this.braintree = new Braintree(this.host, this.timeout)
  }
}

export default Client
