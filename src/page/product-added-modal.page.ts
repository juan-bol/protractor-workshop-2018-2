import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private modalBtn: ElementFinder;

  constructor () {
    this.modalBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async clickModalBtn(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.modalBtn), 3000);
    await this.modalBtn.click();
  }
}
