# E2E Test Automation – Playwright

This folder contains the **end-to-end automated tests** implemented using Playwright.  
The goal of this test suite is to validate **critical user journeys and business rules** of the application while demonstrating a **risk-based, scalable, and maintainable automation approach**.

---

## Overview

- **Framework Type:** End-to-End Automation  
- **Technology Stack:** Playwright, JavaScript, Node.js  
- **Design Pattern:** Page Object Model (POM)  
- **Test Data Management:** Centralized in `fixtures/`  
- **Execution:** Parallel execution supported, retries configured for CI, HTML reports generated  
- **Target Flows:** Login, Checkout, Payment (critical business flows)  

---

## Testing Strategy

Automation is designed following a **risk-based testing approach**, prioritizing **high business impact areas**.

---

## Architecture & Design Decisions

- **Page Object Model (POM):** Separates test logic from UI locators for maintainability.  
- **Centralized Test Data:** Test inputs stored in `fixtures/test-data.js` to avoid duplication.  
- **Parallel Execution:** Tests designed for parallel execution to reduce CI runtime.  
- **Retries and Reporting:** Retries enabled only in CI environments; HTML reports for easy failure analysis.  
- **CI/CD Integration:** GitHub Actions configured to run smoke and regression suites automatically.  
- **Separation of Test Layers:** Smoke vs Regression layers to optimize execution time.  

---

## Assertions & Page Methods

- All page-level assertions are encapsulated in Page Object classes.
- Examples:
  - `inventoryPage.assertCartBadgeIsEmpty()`
  - `cartPage.assertCartHasItems(expectedCount)`
  - `checkoutPage.assertCheckoutCompleted()`
- This improves **readability**, **maintainability**, and **reuse** across tests.

---

## Test Organization

Instead of creating separate folders for smoke and regression tests, this framework uses **tags** to differentiate test layers:

- `@smoke` — for fast, critical flow validation
- `@regression` — for more extensive coverage of business rules and edge cases

This approach allows:

- Flexible test execution using Playwright’s `--grep` or CI pipelines
- Less folder clutter and more maintainable structure
- Easy addition of new test layers without reorganizing files

---

## Helpers & Utilities

- `helpers/` contains test-specific helper functions (e.g., login, add product to cart).
- `utils/` contains generic utility functions (e.g., random string generator, sleep).
- This separation ensures **clean code organization** and **scalable test architecture**.

---

## CI/CD Integration

- **Smoke Tests**: triggered on Pull Requests and Push to main (`@smoke` tagged tests).
- **Regression Tests**: scheduled daily at 3am UTC and can be triggered manually (`@regression` tagged tests).
- HTML reports are uploaded as artifacts per browser (Chromium, Firefox, WebKit).

---

## Running Tests

Run All Tests

```bash
npm test
```

Run Smoke Tests Only

```bash
npm run test:smoke
```

Run Regression Tests Only

```bash
npm run test:regression
```

Run Tests in Headed Mode (browser visible)

```bash
npm run test:headed  # Opens browser visibly for debugging

```

Run Tests from a file only

```bash
npm run test -- tests/product.spec.js
```

### Install Dependencies

```bash
npm install
npx playwright install
```

---

## Trade-offs / Why Not 100% Coverage

- Not all application functionality is automated; the focus is on **critical user journeys** and **high-risk areas**.
- Lower-risk flows are tested manually or planned for future automation based on business priorities.
- This approach demonstrates **strategic decision-making**, balancing effort vs business impact.

---

## Example Reports / Visual Evidence

- HTML reports for smoke and regression tests are generated under `e2e-playwright/reports/`.
- Visual regression snapshots are stored under `../visual-tests/snapshots/`.

---

## Contact

**Author:** Maiana Alebrant  
**LinkedIn:** [Linkedin](https://www.linkedin.com/in/maianaalebrant/)  
**Email:** <maiana.alebrant@gmail.com>
