
# TC-14: Verify Special Character Validation for First Name and Last Name Fields

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-14 |
| **Title** | Verify that the "First Name" and "Last Name" fields reject special characters and symbols during student creation. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. User is on the **Caseload** screen and opens the **Add Student** modal. |
| **Test Data** | **First Name:** `harshu@@@@bbdfffgdf`<br>**Last Name:** `jibhakate@rgdffdgdgdf` |
| **Steps** | 1. Navigate to the **Caseload** page.<br>2. Click the **Add Student** button to open the creation modal.<br>3. Enter `harshu@@@@bbdfffgdf` into the mandatory **First Name** field.<br>4. Enter `jibhakate@rgdffdgdgdf` into the mandatory **Last Name** field.<br>5. Click **Create** and observe the field validation. |
| **Expected Result** | Both the **First Name** and **Last Name** fields should reject unsupported special characters, such as `@`, display appropriate inline validation error messages, and prevent form submission. |
| **Actual Result** | The system accepts special characters (`@`) in both the **First Name** and **Last Name** fields without displaying validation errors or warning messages. |
| **Status** | **FAIL** |
