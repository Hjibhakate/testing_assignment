
# TC-16: Verify Character Length Limit on Service Time String Field

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-16 |
| **Title** | Verify that the "Service Time String" field enforces a maximum character length limit and prevents entering excessively long digit or character strings. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. User is on the **Add Student** modal and can access the **Calculated Service Times** section. |
| **Test Data** | **Service Time String:** `666666666666666666666666666666666666666666666666666666666666` (Excessively long numeric string) |
| **Steps** | 1. Navigate to the **Caseload** page and open the **Add Student** modal.<br>2. Open or edit the **Calculated Service Times** section.<br>3. Locate the **Service Time String** field.<br>4. Enter or paste an excessively long string of digits or characters.<br>5. Observe whether the field restricts input length, truncates excess characters, or displays a validation warning. |
| **Expected Result** | The **Service Time String** field should enforce a defined maximum character limit, prevent input beyond the allowed threshold or display an appropriate validation message, and maintain proper UI formatting without visual overflow. |
| **Actual Result** | The field accepts an excessively long numeric string without displaying a validation error. The text overflows visually and disrupts the layout constraints. |
| **Status** | **FAIL** |
