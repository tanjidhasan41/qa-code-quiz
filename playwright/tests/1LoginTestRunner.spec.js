const { test, expect } = require("@playwright/test");
import validjsonData from "../utils/validUserData.json";
import invalidjsonData from "../utils/invalidUserData.json";
import LoginPage from "../pages/LoginPage";

test.describe("For Valid Users", () => {

    test("Verify User 1 Can Login Successfully", async ({ page }) => {

        const users = validjsonData[validjsonData.length - 2];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

        await expect(page.getByText("Hello SomeName")).toBeVisible({ timeout: 5000 });

    })

    test("Verify User 2 Can Login Successfully", async ({ page }) => {

        const users = validjsonData[validjsonData.length - 1];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

        await expect(page.getByText("Hello undefined")).toBeVisible({ timeout: 5000 });

    })

})

test.describe("For Invalid Users", () => {

    test("Verify User Cannot Login Without UserName and Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 6];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

    test("Verify User Cannot Login With Valid UserName and Without Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 5];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

    test("Verify User Cannot Login Without UserName and With Valid Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 4];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

    test("Verify User Cannot Login With Valid UserName and Invalid Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 3];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

    test("Verify User Cannot Login With Invalid UserName and Valid Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 2];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

    test("Verify User Cannot Login With Invalid UserName and Invalid Password", async ({ page }) => {

        const users = invalidjsonData[invalidjsonData.length - 1];

        await page.goto("/");
        await expect(page.getByText("qa.code-quiz.dev")).toBeVisible({ timeout: 5000 });

        const login = new LoginPage(page);
        await login.loginUser(users.username, users.password);

    })

})