import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';
import { addProductToCart } from '../helpers/cartHelpers.js';
import { users } from '../fixtures/users.js';

test('@regression User can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await addProductToCart(inventoryPage);
});
