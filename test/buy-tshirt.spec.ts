import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, OrderSummaryPage, BankPaymentPage, PaymentStepPage} from '../src/page';

describe('Buy a t-shirt', () => {

  const email = 'aperdomobo@gmail.com';
  const passwd = 'WorkshopProtractor';

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart();
    await productAddedModalPage.clickModalBtn();
    await summaryStepPage.clickCheckOut();

    await signInStepPage.performLogin(email, passwd);

    await addressStepPage.clickCheckOut();

    await shippingStepPage.acceptTermsOfService();

    await shippingStepPage.clickCheckOut();
    await paymentStepPage.clickPayByBank();
    await bankPaymentPage.clickConfirmOrder();

    await expect(orderSummaryPage.getOrderStatus())
      .toBe('Your order on My Store is complete.');
  });
});
