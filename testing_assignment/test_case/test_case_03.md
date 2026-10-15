# TC-03: Positive Path – Password Criteria Validation

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-03 |
| **Title** | Verify that entering a valid password meeting all dynamic strength rules is accepted. |
| **Preconditions** | User is on the account registration page. |
| **Test Data** | Password: `Pass@1234` |
| **Steps** | 1. Navigate to the account setup screen.<br>2. Locate the **Password** input field.<br>3. Enter the valid test password (`Pass@1234`).<br>4. Observe the password strength validation indicator. |
| **Expected Result** | The field should accept the password, satisfy all password validation rules, and display a **"Strong"** password strength rating. |
| **Actual Result** | The application accepted the input password and displayed a validation message confirming that it is a **"Strong"** password. |
| **Status** | **PASS** |
