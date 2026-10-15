# TC-6: Boundary Flow – Attempt Sign Up with an Already Registered Email Address

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-6 |
| **Title** | Verify that the registration flow blocks navigation to the onboarding page when using a duplicate email address. |
| **Preconditions** | An active user account already exists under the chosen test email address. |
| **Test Data** | **Email:** `hjibhakate2004@gmail.com` (existing email address) |
| **Steps** | 1. Navigate to the application account registration screen.<br>2. Enter the pre-existing email address (`hjibhakate2004@gmail.com`).<br>3. Click the **Continue** button.<br>4. Observe the system's response. |
| **Expected Result** | The application should prevent the registration flow from proceeding and display a clear error message indicating that the email address is already registered. |
| **Actual Result** | The registration page prevents the user from proceeding to the onboarding flow and displays a **"User already exists"** warning message. |
| **Status** | **PASS** |