class LoginPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            emailField: page.locator('#user'),
            passwordField: page.locator('#password'),
            loginButton: page.getByRole('button', {name: 'login'})
        }
    }

    async inputEmail(email) {
        await this.locators.emailField.fill(email);
    }

    async inputPassword(password) {
        await this.locators.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.locators.loginButton.click();
    }
}

module.exports = {LoginPage};