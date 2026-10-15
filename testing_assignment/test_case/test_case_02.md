# Test Case: TC-02

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-02 |
| **Title** | Verify that the "Role" dropdown field restricts selection to predefined options and does not allow dynamic injection of unvalidated custom text. |
| **Preconditions** | 1. User has access to the application.<br>2. User is on the account setup registration screen. |
| **Test Data** | Role input text: `@123` |
| **Steps** | 1. Navigate to the account creation setup screen.<br>2. Click the mandatory **Role** dropdown menu to expand the option list.<br>3. Type an invalid string containing numbers and symbols (`@123`) into the dropdown selection/filter box.<br>4. Observe the items displayed in the expanded menu.<br>5. Check whether the typed string becomes a selectable option. |
| **Expected Result** | The dropdown should filter the existing options or display a "No results found" message. The user should only be allowed to enter a custom role after selecting the **"Other"** option. The custom role input field should validate the entered text according to the application's requirements. |
| **Actual Result** | The dropdown menu dynamically appends the unvalidated input string (`@123`) as a new selectable option at the bottom of the list, allowing the user to bypass the predefined role requirements without selecting "Other". |
| **Status** | **FAIL** |
