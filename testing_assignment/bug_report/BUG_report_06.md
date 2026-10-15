
# Bug Report: BUG-6

| **Field** | **Description** |
|---|---|
| **Bug ID** | BUG-6 |
| **Title** | "First Name" and "Last Name" Fields Accept Invalid Special Characters (`@`) in the Add Student Modal |
| **Severity** | Medium |
| **Priority** | Medium |
| **Environment** | [https://staging.ablespace.io/caseload](https://staging.ablespace.io/caseload) |
| **Browser / Device** | Google Chrome (Desktop) |
| **Reproducibility** | Always |

## Steps to Reproduce

1. Navigate to the [Caseload page](https://staging.ablespace.io/caseload).
2. Click the **Add Student** button.
3. Enter `harshu@@@@bbdfffgdf` into the **First Name** field.
4. Enter `jibhakate@rgdffdgdgdf` into the **Last Name** field.
5. Observe whether the form accepts the special characters without displaying validation errors.

## Expected Result

The **First Name** and **Last Name** fields should validate against unsupported special characters and symbols, such as `@`, display appropriate error messages, and prevent form submission.

## Actual Result

The system accepts special characters (`@`) in both the **First Name** and **Last Name** fields without displaying any validation errors or warnings.

## Evidence

![BUG-06](./bug-6.png) |
