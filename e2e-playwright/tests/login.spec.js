import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { users } from '../fixtures/users.js';

test.describe('Authentication - Risk Based Coverage', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('@smoke Valid user should login successfully', async () => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.assertUserIsLoggedIn();
  });

  test('@regression Locked user should see locked error', async () => {
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await loginPage.assertUserIsLocked();
  });

  test('@regression Invalid credentials should show error', async () => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await loginPage.assertInvalidCredentialsError();
  });
});
