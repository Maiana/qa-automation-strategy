const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../fixtures/users');

test.describe('Authentication - Risk Based Coverage', () => {

  test('@smoke Valid user should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await loginPage.assertUserIsLoggedIn();
  });

  test('@regression Locked user should see locked error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);

    await loginPage.assertUserIsLocked();
  });

  test('@regression Invalid credentials should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    await loginPage.assertInvalidCredentialsError();
  });

});