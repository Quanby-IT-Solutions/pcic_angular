import { test, expect } from '@playwright/test';

test('home has title PCIC Web Application', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PCIC Web Application/);
});

test('signin link is /auth/login', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('link', { name: 'Signin' }).click();

  // Expects page to have a URL.
  await expect(page).toHaveURL(/\/auth\/login$/);
});
