import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailTextField: ElementFinder;
  private pwdTextField: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.emailTextField = $('#email');
    this.pwdTextField = $('#passwd');
    this.submitBtn = $('#SubmitLogin > span');
  }

  public async performLogin(): Promise<void> {
    await this.emailTextField.sendKeys('aperdomobo@gmail.com');
    await this.pwdTextField.sendKeys('WorkshopProtractor');
    await this.submitBtn.click();
  }
}
