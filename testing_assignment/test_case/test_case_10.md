
# TC-10: Boundary Case – Empty Password Field Submission

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-10 |
| **Title** | Verify that leaving the Password field empty triggers mandatory field validation. |
| **Preconditions** | User is on the account registration page. |
| **Test Data** | Empty password field |
| **Steps** | 1. Navigate to the account setup screen.<br>2. Leave the **Password** field empty.<br>3. Attempt to click **Continue** or submit the form.<br>4. Observe the validation feedback. |
| **Expected Result** | The application should display an inline validation message such as "Password is required" and prevent the user from proceeding. |
| **Actual Result** | The application displays a mandatory-field validation message and prevents the user from proceeding without entering a password. |
| **Status** | **PASS** |