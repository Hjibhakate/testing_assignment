
# TC-17: Verify Data Format Validation and Error Highlighting in Bulk Add Students Table

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-17 |
| **Title** | Verify that the "Bulk Add Students" grid validates data entries (IEP Due, Eval Due, Grade, DOB) and displays inline error messages for invalid formats. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. User navigates to **Caseload** and opens the **Bulk Add Manually** student import table. |
| **Test Data** | **Row 1:**<br>**IEP Due:** `56/8/9`<br>**Eval Due:** `8/6/9`<br>**Grade:** `1st`<br>**DOB:** `8/9/6`<br><br>**Row 3:**<br>**IEP Due:** `66/8/9` |
| **Steps** | 1. Navigate to the **Caseload** screen and select **Bulk Add Manually**.<br>2. Enter invalid date formats (e.g., `56/8/9` and `8/6/9`) into the **IEP DUE**, **EVAL DUE**, and **DOB** fields.<br>3. Enter an invalid option into the **GRADE** column.<br>4. Observe the real-time field highlighting and system error banner generation. |
| **Expected Result** | The application should detect invalid date formats (`MM/DD/YYYY`) and grade selections, highlight erroneous table cells with a red outline, and display clear, row-specific error messages at the top of the modal. |
| **Actual Result** | The system correctly identifies invalid data entries, highlights the specific cells with a red outline, and displays detailed error messages (e.g., *"IEP DUE should be in the format MM/DD/YYYY in row 1 column 3"*). |
| **Status** | **PASS** |
| **Evidence** | Attach screenshots showing the invalid entries, red cell outlines, and validation error messages. |
