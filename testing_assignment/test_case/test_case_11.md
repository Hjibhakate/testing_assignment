# TC-11: Verify "Start Over" Button Redirection on Resume Setup Modal

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-11 |
| **Title** | Verify that clicking the "Start Over" button on the "Resume Setup" modal immediately redirects the user to the first onboarding page without requiring a manual refresh. |
| **Preconditions** | 1. User has access to the application and is logged in (`hjibhakate2004@gmail.com`).<br>2. User has existing saved progress in the onboarding flow (e.g., Step 2: "Select the features you'll use").<br>3. The "Resume Setup" modal is displayed on the screen. |
| **Test Data** | **Logged-in User Email:** `hjibhakate2004@gmail.com`<br>**Current Onboarding Step:** Step 2 ("Select the features you'll use") |
| **Steps** | 1. Navigate to the onboarding flow where saved progress exists.<br>2. Observe the "Resume Setup" modal prompt: "We saved your progress. Do you want to continue from Step 2?"<br>3. Click the **Start Over** button within the modal.<br>4. Observe the page behavior and URL redirection without performing any manual browser actions. |
| **Expected Result** | Clicking the **Start Over** button should immediately clear the saved onboarding state/progress and automatically redirect the user to the first onboarding page without requiring a manual page refresh. |
| **Actual Result** | The application fails to redirect to the first onboarding page after clicking **Start Over**. The screen or onboarding state updates only after the user manually refreshes the browser. |
| **Status** | **FAIL** |