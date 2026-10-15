# TC-04: Success Flow – Sign Up and Direct Onboarding Redirection

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-04 |
| **Title** | Verify that a user can successfully create an account with valid credentials and automatically redirect to the onboarding workspace page. |
| **Preconditions** | 1. User has access to the application landing page.<br>2. No existing account is registered with the test email address. |
| **Test Data** | **Email:** `newuser_qa@ablespace.io`<br>**Password:** `Pass@1234` |
| **Steps** | 1. Navigate to the application home screen.<br>2. Click the **Create Account** or **Sign Up** button.<br>3. Enter a unique, valid email address (`newuser_qa@ablespace.io`).<br>4. Click the **Continue** button.<br>5. Set up a password that meets the application's requirements (`Pass@1234`).<br>6. Click the final registration or submission button.<br>7. Observe the URL and screen after submitting the registration form. |
| **Expected Result** | The account should be created successfully, and the user should be automatically redirected to the onboarding setup flow at `https://ablespace.io`. |
| **Actual Result** | The application successfully authorized the user and redirected them to the onboarding question layout. |
| **Status** | **PASS** |