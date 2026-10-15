# Test Case: TC-05

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-05 |
| **Title** | Verify that the onboarding footer, layout spacing, and "Skip" button do not overlap subtext elements on the "Select features" screen. |
| **Preconditions** | 1. User is authenticated and logged in.<br>2. User is navigating through the initial account creation onboarding steps. |
| **Test Data** | Screen resolution: Standard desktop viewport. |
| **Steps** | 1. Navigate through the registration/onboarding workflow until reaching the "Select the features you'll use" screen.<br>2. Inspect the bottom section of the page near the action controls ("Skip" and "Continue" buttons).<br>3. Inspect the informational text: *"You can always change these settings later in preferences."*<br>4. Check whether the footer text and action buttons overlap or obscure one another. |
| **Expected Result** | All text elements, footer descriptions, and action buttons should be positioned correctly with appropriate spacing and padding. No text should overlap, become clipped, or be unreadable. |
| **Actual Result** | The **"Skip" button** overlaps the word **"preferences"** in the informational text, resulting in a broken layout and making the text difficult to read. |
| **Status** | **FAIL** |
