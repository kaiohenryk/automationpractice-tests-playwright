// @ts-check
import { test, expect } from '@playwright/test';

test('Login successfully', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').fill('teste123456');
  await page.getByRole('button', { name: 'login' }).click();
  
  await expect(page).toHaveURL('https://automationpratice.com.br/my-account')
  await expect(page.locator('#swal2-title')).toContainText('Login realizado');
  await expect(page.locator('#swal2-html-container')).toContainText('Olá, teste@gmail.com')
});

test('Login with invalid credentials', async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('teste@mail');
  await page.locator('#password').fill('123');
  await page.getByRole('button', { name: 'login' }).click();
  
  await expect(page).toHaveURL('https://automationpratice.com.br/login')
  await expect(page.locator('.account_form h3')).toContainText('Login');
});