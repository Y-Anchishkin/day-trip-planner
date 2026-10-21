import { test, expect } from '@playwright/test'

test('verify app title text', async ({ page }) => {
  await page.goto('/')
  const heading = page.getByRole('heading', { name: 'Day Trip Planner' })
  await expect(heading).toBeVisible()
  await expect(heading).toHaveText('Day Trip Planner')
})