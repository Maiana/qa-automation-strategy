import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = '[data-test="error"]';
  }

  // -------------------
  // Actions
  // -------------------

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }

  // -------------------
  // Assertions
  // -------------------

  async assertUserIsLoggedIn() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async assertUserIsLocked() {
    await expect(this.getErrorMessage()).toContainText('locked out');
  }

  async assertInvalidCredentialsError() {
    await expect(this.getErrorMessage()).toContainText('Username and password do not match');
  }
}
