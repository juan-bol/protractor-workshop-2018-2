import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private tsCheckbox: ElementFinder;
  private checkoutBtn: ElementFinder;

  constructor () {
    this.tsCheckbox = $('#cgv');
    this.checkoutBtn = $('#form > p > button > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.tsCheckbox.click();
  }
  public async clickCheckOut(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
