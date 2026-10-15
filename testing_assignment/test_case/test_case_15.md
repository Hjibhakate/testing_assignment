
# TC-15: Verify Character Length Limit on First Name and Last Name Fields

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-15 |
| **Title** | Verify that the "First Name" and "Last Name" fields enforce a maximum character length limit and restrict excessively long text strings. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. User is on the **Caseload** screen and opens the **Add Student** modal. |
| **Test Data** | **First Name:** `dddddddddddddddddddddddddc` (Extremely long string)<br>**Last Name:** `dddddddddddddddddddddddddc` (Extremely long string) |
| **Steps** | 1. Navigate to the **Caseload** page.<br>2. Click the **Add Student** button to open the creation modal.<br>3. Enter an excessively long character string into the **First Name** field.<br>4. Enter an excessively long character string into the **Last Name** field.<br>5. Observe whether the input is restricted, truncated, or a character-limit validation error is displayed. |
| **Expected Result** | The **First Name** and **Last Name** fields should enforce a reasonable maximum character limit, restrict input beyond that limit, or display a clear validation warning. |
| **Actual Result** | The system accepts excessively long text strings in both name fields without restricting the input or displaying any character-length validation error. |
| **Status** | **FAIL** |
