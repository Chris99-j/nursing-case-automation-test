// tests/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login'); 
    // change to your actual URL
  });

  test('User can login successfully', async ({ page }) => {
    await page.fill('#email', 'test@test.com');
    await page.fill('#password', 'password123');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

});