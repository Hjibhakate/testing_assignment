import 'dotenv/config';
import { test, expect, chromium } from '@playwright/test';

test('Enter email and password on AbleSpace', async () => {
    // Use persistent context to retain cookies/session and bypass automated captcha flagging
    const userDataDir = './user_data'; // Local profile directory
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: ['--disable-blink-features=AutomationControlled'] // Disables bot detection flag
    });

    const page = await context.newPage();

    // 1. Open the staging website
    await page.goto(process.env.APP_URL!);

    // 2. Locate and fill email
    const emailInput = page.locator('#email');
    const email = process.env.APP_EMAIL;
    if (!email) throw new Error('APP_EMAIL is missing from .env');

    await emailInput.fill(email);

    // 3. Click submit
    const submitButton = emailInput.locator('xpath=ancestor::form').locator('button');
    await submitButton.click();

    // 4. Wait for password field
    const passwordInput = page.locator('#password');
    await expect(passwordInput).toBeVisible({ timeout: 5000 });

    // 5. Fill password
    const password = process.env.APP_PASSWORD;
    if (!password) throw new Error('APP_PASSWORD is missing from .env');

    await passwordInput.fill(password);

    // 6. Click signin button using robust selector instead of rigid XPath
    const nextButton = page.locator('button[type="submit"]');
    await nextButton.click();

    await page.waitForTimeout(10000);
    await context.close();
});