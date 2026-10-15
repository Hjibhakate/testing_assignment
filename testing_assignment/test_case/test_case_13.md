
# TC-13: Verify Custom Profile Picture Persistence When Changing Avatar Color

| **Field** | **Description** |
|---|---|
| **Test Case ID** | TC-13 |
| **Title** | Verify that the uploaded custom profile picture remains intact when opening the "Change Color" menu and selecting a color. |
| **Preconditions** | 1. User is logged into the application workspace.<br>2. The "Add Student" modal is open. |
| **Test Data** | **Student Name:** `Harsha Jibhakate`<br>**Custom Picture:** Valid `.png` or `.jpg` image file<br>**Selected Color:** Any available preset color |
| **Steps** | 1. Open the "Add Student" modal.<br>2. Click **Upload Custom Picture** and select a valid image file.<br>3. Crop or adjust the image and click **Done**.<br>4. Open the **Change Color** menu and verify that the uploaded image remains visible.<br>5. Select any available color swatch.<br>6. Verify that the uploaded image remains visible and is not replaced by the default initials (`HJ`). |
| **Expected Result** | The uploaded custom profile picture should remain visible and intact when opening the "Change Color" menu and selecting any color swatch. The image upload state should not be cleared or reset. |
| **Actual Result** | The uploaded custom picture disappears when the user opens the "Change Color" menu or selects a color, reverting to the default initials (`HJ`). |
| **Status** | **FAIL** |

