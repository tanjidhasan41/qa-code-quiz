class LoginPage {
    constructor(page) {
        this.page = page;
        this.txtUserName = page.getByRole("textbox", { name: "Enter Username" });
        this.txtPassword = page.getByRole("textbox", { name: "password" });
        this.btnLogin = page.getByRole("button", { name: "LOGIN" });
    }

    async loginUser(userName, password) {

        await this.txtUserName.fill(userName);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();

    }
}

export default LoginPage;