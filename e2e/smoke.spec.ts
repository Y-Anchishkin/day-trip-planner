import { test, expect } from '@playwright/test'

test('verify app title text', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Day Trip Planner/)
})