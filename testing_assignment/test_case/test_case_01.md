# TC-01: Verify Full Name Field Validation for Special Characters

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-01 |
| **Title** | Verify that the "Full Name" field validates and rejects symbols and special characters. |
| **Preconditions** | 1. User has access to the application.<br>2. User is on the "Setting Up Your Account" registration screen. |
| **Test Data** | **Email Address:** `hjibhakate2004@gmail.com`<br>**Full Name:** `@rddfgldfgdfkmgl.com!# $%` |
| **Steps** | 1. Navigate to the application registration flow.<br>2. Enter a valid email address (`hjibhakate2004@gmail.com`) and proceed to the account setup step.<br>3. Locate the mandatory **Full Name** field.<br>4. Enter a string containing multiple special characters and symbols: `@rddfgldfgdfkmgl.com!# $%`.<br>5. Attempt to proceed or observe the field's real-time validation response. |
| **Expected Result** | The "Full Name" field should reject invalid special characters, prevent the user from proceeding, and display a clear validation error message indicating that the name contains invalid characters. |
| **Actual Result** | The system accepts the special characters and symbols (`@`, `.`, `!`, `#`, `$`, `%`) in the "Full Name" field without displaying a warning or validation error. |
| **Status** | **FAIL** |