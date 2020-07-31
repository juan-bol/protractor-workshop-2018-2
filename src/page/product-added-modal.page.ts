import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private modalBtn: ElementFinder;

  constructor () {
    this.modalBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async clickModalBtn(): Promise<void> {
    await this.modalBtn.click();
  }
}
