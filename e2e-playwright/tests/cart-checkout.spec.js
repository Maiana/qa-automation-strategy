const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { addProductToCart } = require('../helpers/cartHelpers');
const users = require('../fixtures/users');

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