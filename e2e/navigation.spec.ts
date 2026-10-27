import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('home address redirects to preferences', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/preferences$/)
    await expect(page.getByRole('heading', { name: 'Your preferences' })).toBeVisible()
  })

  test('user can go from preferences to new trip to plan', async ({ page }) => {
    await page.goto('/preferences')

    await page.getByRole('link', { name: 'Save and continue' }).click()
    await expect(page).toHaveURL(/\/trip\/new$/)
    await expect(page.getByRole('heading', { name: 'New trip' })).toBeVisible()

    await page.getByRole('link', { name: 'Create plan' }).click()
    await expect(page).toHaveURL(/\/trip\/plan$/)
    await expect(page.getByRole('heading', { name: 'Your trip plan' })).toBeVisible()
  })

  test('browser back button returns to the previous screen', async ({ page }) => {
    await page.goto('/trip/new')
    await page.getByRole('link', { name: 'Create plan' }).click()
    await expect(page).toHaveURL(/\/trip\/plan$/)

    await page.goBack()
    await expect(page).toHaveURL(/\/trip\/new$/)
    await expect(page.getByRole('heading', { name: 'New trip' })).toBeVisible()
  })

  test('unknown address redirects to the start', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page).toHaveURL(/\/preferences$/)
  })
})
