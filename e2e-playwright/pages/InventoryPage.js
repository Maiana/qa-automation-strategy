import { expect } from '@playwright/test';

export default class InventoryPage {
  constructor(page) {
    this.page = page;

    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButton = '.inventory_item button';
    this.cartButton = page.locator('.shopping_cart_link');
    this.inventoryTitle = page.locator('.title');
  }

  // -------------------
  // Actions
  // -------------------

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  // -------------------
  // Assertions
  // -------------------

  async assertInventoryPageLoaded() {
    await expect(this.inventoryTitle).toHaveText('Products');
  }

  async assertCartBadgeIsEmpty() {
    await expect(this.cartBadge).toHaveCount(0);
  }

  async assertCartBadgeHasItems(expectedCount) {
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartBadge).toHaveCount(expectedCount);
  }
}
