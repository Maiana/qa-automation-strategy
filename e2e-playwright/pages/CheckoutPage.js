import { expect } from '@playwright/test';

export default class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutTitle = page.locator('.title');
    this.completeHeader = page.locator('.complete-header');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishCheckoutButton = page.locator('[data-test="finish"]');
  }

  // -------------------
  // Actions
  // -------------------

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishCheckoutButton.click();
  }

  // -------------------
  // Assertions
  // -------------------

  async assertCheckoutPageLoaded() {
    await expect(this.checkoutTitle).toHaveText('Checkout: Your Information');
  }

  async assertCheckoutCompleted() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
