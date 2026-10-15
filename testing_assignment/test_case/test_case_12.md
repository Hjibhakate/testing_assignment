
# TC-12: Verify Email Verification Prompt and Functionality Post-Onboarding

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-12 |
| **Title** | Verify that an unverified user receives an email verification prompt after completing onboarding and can successfully verify their account. |
| **Preconditions** | 1. A new user account has been registered with an unverified email address.<br>2. The user completes the initial onboarding flow without verifying the email address first. |
| **Test Data** | **User Account:** Newly created account with an unverified email address.<br>**Email Inbox:** Access to the inbox associated with the registered email address. |
| **Steps** | 1. Complete the onboarding wizard without verifying the email address first.<br>2. Navigate to the main application workspace or dashboard.<br>3. Observe whether an email verification banner or prompt is displayed.<br>4. Open the user's email inbox and locate the verification email.<br>5. Click the verification link provided in the email.<br>6. Return to the application and refresh the page or check the account status. |
| **Expected Result** | 1. The application should display an **Email Unverified** warning or banner after onboarding.<br>2. Clicking the verification link should successfully update the account status to **Verified** and clear the verification warning from the workspace. |
| **Actual Result** | The email verification banner appeared after onboarding. Clicking the verification link successfully verified the account and updated the workspace state. |
| **Status** | **PASS** |
