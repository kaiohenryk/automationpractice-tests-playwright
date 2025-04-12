const {test, expect} = require ('@playwright/test');
const {HomePage} = require('../pages/homePage');
const {LoginPage} = require('../pages/loginPage');

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  
  const email = 'teste@gmail.com';
  const password = '123456';
  const expectedUrl = 'https://automationpratice.com.br/my-account';
  const expectedLoginText = 'Login realizado';

  await homePage.clickLogin();
  await loginPage.inputEmail(email);
  await loginPage.inputPassword(password);
  await loginPage.clickLoginButton();

  await expect(page).toHaveURL(expectedUrl);
  await expect(page.locator('#swal2-title')).toContainText(expectedLoginText);
});

test('Login with invalid credentials', async ({page}) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const email = 'teste@mail';
  const password = '123';
  const expectedUrl = 'https://automationpratice.com.br/login';
  const expectedLoginText = 'Login';

  await homePage.clickLogin();
  await loginPage.inputEmail(email);
  await loginPage.inputPassword(password);
  await loginPage.clickLoginButton();
  
  await expect(page).toHaveURL(expectedUrl)
  await expect(page.locator('.account_form h3')).toContainText(expectedLoginText);
});