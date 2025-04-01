import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
})

test.only('send email', async ({page}) => {
    await page.locator('[name="EMAIL"]').scrollIntoViewIfNeeded();
    await page.locator('[name="EMAIL"]').fill('teste@gmail.com');
    await page.getByText('Send Mail').click();
  
    await expect(page.locator('#swal2-title')).toContainText('Success');
    await expect(page.locator('#swal2-html-container')).toContainText('Thank you for your Subscribtion');
  });