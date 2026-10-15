# Bug Report: BUG-01

| **Field** | **Description** |
|---|---|
| **Bug ID** | BUG-01 |
| **Title** | "Full Name" input field accepts invalid symbols and special characters without validation errors. |
| **Severity** | Medium |
| **Priority** | Medium |
| **Environment** | Account Setup Registration Page |
| **Browser / Device** | Google Chrome (Desktop) |
| **Reproducibility** | Always |
| **Steps to Reproduce** | 1. Open the application registration portal.<br>2. Enter a valid email address and click **Continue** to reach the account setup screen.<br>3. Locate the mandatory **Full Name** field.<br>4. Enter a string containing symbols and special characters, such as `@rddfgldfgdfkmgl.com!# $%`.<br>5. Click outside the field or attempt to submit the form. |
| **Expected Result** | The input validation should reject the entry, display a clear error message (e.g., "The name contains invalid characters."), and prevent form submission. |
| **Actual Result** | The field accepts the text string containing symbols (`@`, `.`, `!`, `#`, `$`, `%`) without displaying a validation error. |
| **Evidence** | ![BUG-01: Full Name field accepts special characters](./BUG-01-full-name-validation.png) |