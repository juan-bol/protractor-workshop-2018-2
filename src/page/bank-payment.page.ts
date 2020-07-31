import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    this.confirmOrderBtn = $('#cart_navigation > button > span');
  }

  public async clickConfirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
