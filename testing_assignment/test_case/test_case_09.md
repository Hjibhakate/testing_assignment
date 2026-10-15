
# TC-09: Validation – Missing Number/Digit

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-09 |
| **Title** | Verify that the Password field rejects passwords that do not contain a numeric digit. |
| **Preconditions** | User is on the account registration page. |
| **Test Data** | `SecureP@ssword` |
| **Steps** | 1. Navigate to the account setup screen.<br>2. Enter `SecureP@ssword` into the **Password** field.<br>3. Observe the password validation feedback.<br>4. Attempt to proceed by clicking **Continue**. |
| **Expected Result** | The application should display an inline validation message indicating that at least one numeric digit is required and prevent the user from proceeding. |
| **Actual Result** | The application displays validation feedback indicating that the password does not contain a numeric digit and prevents the user from proceeding. |
| **Status** | **PASS** |