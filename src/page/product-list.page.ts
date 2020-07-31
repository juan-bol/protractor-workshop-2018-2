import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartBtn: ElementFinder;

  constructor () {
    this.addToCartBtn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartBtn), 3000);
    await this.addToCartBtn.click();
  }
}
