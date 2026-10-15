
# Bug Report: BUG-5

| **Field** | **Description** |
|---|---|
| **Bug ID** | BUG-5 |
| **Title** | Uploaded Custom Profile Picture Disappears When Opening the "Change Color" Menu or Selecting a Color Swatch |
| **Severity** | Medium |
| **Priority** | Medium |
| **Environment** | [https://ablespace.io](https://ablespace.io) |
| **Browser / Device** | Google Chrome (Desktop) |
| **Reproducibility** | Always |

## Steps to Reproduce

1. Open the **Add Student** modal in the application workspace.
2. Click **Upload Custom Picture** and select a valid image file (`.png` or `.jpg`).
3. Crop or adjust the image and click **Done** to apply it.
4. Open the **Change Color** menu and check the avatar state.
5. Select any available color swatch.

## Expected Result

The uploaded custom profile picture should remain visible and intact when opening the **Change Color** menu and selecting any color swatch, without being cleared or reset.

## Actual Result

The uploaded custom picture disappears when the user opens the **Change Color** menu or selects a color, reverting to the default initials (`HJ`).

## Status

**FAIL**

## Evidence

**Video Recording:** `bug5.mp4`

[View Bug Reproduction Video](bug5.mp4)
