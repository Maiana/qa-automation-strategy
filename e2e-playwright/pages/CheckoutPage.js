const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutTitle = page.locator('.title');
    this.completeHeader = page.locator('.complete-header');
  }

  // -------------------
  // Actions
  // -------------------

  async fillInformation(firstName, lastName, postalCode) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
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

module.exports = { CheckoutPage };