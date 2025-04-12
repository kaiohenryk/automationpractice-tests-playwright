class HomePage {
    constructor(page) {
        this.page = page;

        this.locators = {
            loginLink: page.getByRole('link', { name: 'Login' }),
            newsletterEmailField: page.locator('[name="EMAIL"]'),
            newsletterSendMailButton: page.getByRole('button', {name: 'Send Mail'})
        }
    }

    async clickLogin() {
        await this.locators.loginLink.click();
    }

    async inputNewsletterEmail(email) {
        await this.locators.newsletterEmailField.scrollIntoViewIfNeeded();
        await this.locators.newsletterEmailField.fill(email);
    }

    async submitNewsletter() {
        await this.locators.newsletterSendMailButton.click();
    }
}

module.exports = {HomePage};