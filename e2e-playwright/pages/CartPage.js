import { expect } from '@playwright/test';

export default class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.cartTitle = page.locator('.title');
  }

  // -------------------
  // Actions
  // -------------------

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  // -------------------
  // Assertions
  // -------------------

  async assertCartPageLoaded() {
    await expect(this.cartTitle).toHaveText('Your Cart');
  }

  async assertCartHasItems(expectedCount) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async assertCartIsEmpty() {
    await expect(this.cartItems).toHaveCount(0);
  }
}
