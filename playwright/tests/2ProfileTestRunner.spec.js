const { test, expect } = require("@playwright/test");
import validjsonData from "../utils/validUserData.json";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

test.describe("Profile Page Testing for SomeUser_name", () => {

    test.beforeEach("Login Before Each Test", async ({ page }) => {

        const users = validjsonData[validjsonData.length - 2];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

        await expect(page.getByText("Hello SomeName")).toBeVisible({ timeout: 5000 });

    })

    test("Verify User Should Display Greeting Message On The Profile Page Header", async ({ page }) => {

        await expect(page.getByText("Hello SomeName")).toBeVisible({ timeout: 5000 });

    })

    test("Verify Correct Field Labels Should Display", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.fieldLableUser1();

    })

    test("Verify Correct User Informations Should Display", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.userInfo1();

    })

    test("Verify User Can LogOut and Redirect To The Login Page", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.logOut();
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

    })

    test("Verify User Should Stay at The Profile Page After Reload", async ({ page }) => {

        await page.reload();
        await expect(page.getByText("Hello SomeName")).toBeVisible({ timeout: 5000 });

    })

})

test.describe("Profile Page Testing for dummytree", () => {

    test.beforeEach("Login Before Each Test", async ({ page }) => {

        const users = validjsonData[validjsonData.length - 1];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

        await expect(page.getByText("Hello undefined")).toBeVisible({ timeout: 5000 });

    })

    test("Verify Default Greeting Message Should Display When User Name is Missing", async ({ page }) => {

        await expect(page.getByText("Hello undefined")).toBeVisible({ timeout: 5000 });

    })

    test("Verify Correct Field Labels Should Display", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.fieldLableUser2();

    })

    test("Verify Correct User Informations Should Display", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.userInfo2();

    })

    test("Verify User Can LogOut and Redirect To The Login Page", async ({ page }) => {

        const profile = new ProfilePage(page);
        await profile.logOut();
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

    })

    test("Verify User Should Stay at The Profile Page After Reload", async ({ page }) => {

        await page.reload();
        await expect(page.getByText("Hello undefined")).toBeVisible({ timeout: 5000 });

    })

})