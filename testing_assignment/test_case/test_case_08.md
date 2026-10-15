
# TC-08: Validation – Missing Special Character

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-08 |
| **Title** | Verify that the Password field rejects passwords missing a special character. |
| **Preconditions** | User is on the account registration page. |
| **Test Data** | `SecurePassword123` |
| **Steps** | 1. Navigate to the account setup screen.<br>2. Enter `SecurePassword123` into the **Password** field.<br>3. Observe the password validation feedback.<br>4. Attempt to submit the registration form. |
| **Expected Result** | The application should display an inline validation message indicating that a special character is required and prevent submission until the requirement is met. |
| **Actual Result** | The application displays validation feedback indicating that the password is missing a special character and prevents the user from proceeding. |
| **Status** | **PASS** |

