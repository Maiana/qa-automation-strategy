# Risk Analysis

Quality investment is aligned with business impact.

## Risk Matrix

| Area            | Business Impact | Likelihood | Risk Level | Test Approach |
|-----------------|-----------------|------------|------------|---------------|
| Checkout        | High            | Medium     | Critical   | E2E + API     |
| Login           | High            | High       | Critical   | E2E           |
| Cart            | High            | Medium     | High       | API + E2E     |
| Product Catalog | Medium          | High       | High       | API           |
| User Profile    | Low             | Medium     | Low        | API           |
| UI Layout       | Medium          | Medium     | Medium     | Visual        |

---

## Risk Rationale

Checkout is prioritized due to direct revenue impact.

Login has high likelihood of regression due to authentication complexity.

UI layout changes are monitored through visual regression but are not business-critical.
