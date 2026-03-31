import { test, expect } from '@playwright/test';

test.describe('Homepage Black-Box Tests', () => {
  test('should load the homepage and display the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/CloudInfra IT/);
  });

  test('should have a visible Hero section with primary CTA', async ({ page }) => {
    await page.goto('/');
    
    // Check for Hero headline (using level 1 and a more lenient check)
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Healthcare Staffing');
    await expect(h1).toContainText('Built for the USA');

    // Check for "Find a Job" CTA
    const findJobButton = page.getByRole('link', { name: /Find a Job/i });
    await expect(findJobButton).toBeVisible();
    await expect(findJobButton).toHaveAttribute('href', '/job-opportunities');
  });

  test('should display the StatsBar with internal mission data', async ({ page }) => {
    await page.goto('/');
    
    // Check for stats using text (scrolling might be needed but Playwright handles visibility automatically)
    await expect(page.getByText('2,400+')).toBeVisible();
    await expect(page.getByText('Professionals Placed')).toBeVisible();
  });

  test('should have a functional navigation to the about page', async ({ page }) => {
    await page.goto('/');
    // Use first() to avoid ambiguity between desktop/mobile/footer links in E2E
    const aboutLink = page.getByRole('link', { name: 'About', exact: true }).first();
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('should have the "Ready to get started?" CTA at the bottom', async ({ page }) => {
    await page.goto('/');
    const bottomCta = page.getByText(/Ready to get started\?/i);
    await expect(bottomCta).toBeVisible();
  });
});
