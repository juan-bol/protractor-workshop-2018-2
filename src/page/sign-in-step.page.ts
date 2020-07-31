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

  public async performLogin(email, passwd): Promise<void> {
    await this.emailTextField.sendKeys(email);
    await this.pwdTextField.sendKeys(passwd);
    await this.submitBtn.click();
  }
}
