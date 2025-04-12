const {test, expect} = require ('@playwright/test');
const {HomePage} = require('../pages/homePage');

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
})

test('sending newsletter', async ({page}) => {
    const homePage = new HomePage(page);
    
    const email = 'teste@gmail.com';
    const expectedTitle = 'Success';
    const expectedMessage = 'Thank you for your Subscribtion';
    
    await homePage.inputNewsletterEmail(email);
    await homePage.submitNewsletter();
  
    await expect(page.locator('#swal2-title')).toContainText(expectedTitle);
    await expect(page.locator('#swal2-html-container')).toContainText(expectedMessage);
  });