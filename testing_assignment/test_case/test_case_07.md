# TC-07: Validation – Missing Minimum Character Count

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-07 |
| **Title** | Verify that the Password field rejects passwords shorter than the 8-character minimum. |
| **Preconditions** | User is on the account registration page. |
| **Test Data** | `P@s123` (6 characters) |
| **Steps** | 1. Navigate to the account setup screen.<br>2. Enter `P@s123` into the **Password** field.<br>3. Observe the validation message.<br>4. Attempt to proceed to the next step. |
| **Expected Result** | The application should display an inline validation message indicating that the password must contain at least 8 characters and prevent the user from proceeding. |
| **Actual Result** | The application displays a small inline validation message indicating that the password does not meet the minimum character requirement. No popup appears. |
| **Status** | **PASS** |

