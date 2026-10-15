
# TC-17: Verify Numeric-Only Validation for Room Number and Character Limits for Case Manager and Eligibility Fields

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-17 |
| **Title** | Verify that the "Room Number" field restricts input to numeric values only, while the "Case Manager" and "Eligibility" fields enforce maximum character length limits. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. The **Add Student** modal is open. |
| **Test Data** | **Room Number:** `sdsdfsdfsdfsfdfsdfsdfsdfsdfdsfdsfdsfsd` (Alphabetic text string)<br>**Case Manager:** Excessively long text string<br>**Eligibility:** Excessively long text string |
| **Steps** | 1. Open the **Add Student** creation modal.<br>2. Enter alphabetical text into the **Room Number** field and verify input restrictions.<br>3. Enter excessively long text into the **Case Manager** field.<br>4. Enter excessively long text into the **Eligibility** field.<br>5. Observe whether the Room Number field rejects non-numeric input and whether character limits are enforced on the other fields. |
| **Expected Result** | The **Room Number** field should accept only numeric values and reject non-numeric input. The **Case Manager** and **Eligibility** fields should enforce maximum character length limits to prevent excessively long input and visual overflow. |
| **Actual Result** | The **Room Number** field accepts alphabetical text without validation, while the **Case Manager** and **Eligibility** fields allow excessively long text inputs without enforcing character limits. |
| **Status** | **FAIL** |
