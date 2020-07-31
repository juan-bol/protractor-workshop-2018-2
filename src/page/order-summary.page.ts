import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('#center_column > div > p > strong');
  }

  public async getOrderStatus(): Promise<String> {
    const title = await this.orderStatus.getText();
    return title;
  }
}
