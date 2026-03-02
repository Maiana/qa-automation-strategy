# Architecture Decisions

## Playwright as Primary E2E Tool

Reasons:

- Reliable parallel execution
- Modern architecture
- Strong API testing capabilities
- Built-in visual testing support

---

## Nightwatch Inclusion

Included to demonstrate:

- Experience with legacy frameworks
- Ability to compare architectural patterns
- Broader tool expertise

---

## API Testing Strategy

API tests validate business rules rather than simple status codes.

Focus areas:

- Authentication
- Data integrity
- Negative scenarios
- Edge cases

---

## CI Integration

CI is treated as a first-class quality gate.

Critical tests block merges.
Full regression runs nightly.
