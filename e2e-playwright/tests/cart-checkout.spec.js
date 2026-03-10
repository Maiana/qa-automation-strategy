import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import { addProductToCart } from '../helpers/cartHelpers.js';
import { users } from '../fixtures/users.js';

test('@smoke User completes checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await addProductToCart(inventoryPage);

  await inventoryPage.openCart();
  await cartPage.assertCartPageLoaded();
  await cartPage.assertCartHasItems(1);

  await cartPage.clickCheckout();
  await checkoutPage.assertCheckoutPageLoaded();

  await checkoutPage.fillInformation('Maiana', 'Alebrant', '08001');
  await checkoutPage.finishCheckout();

  await checkoutPage.assertCheckoutCompleted();
});
