import { expect } from "@playwright/test";

class ProfilePage {
    constructor(page) {
        this.page = page;
        this.lblName1 = page.locator("//div[normalize-space()='Name']");
        this.lblName2 = page.locator("//div[contains(text(),'Name')]");
        this.lblFruit = page.locator("//div[normalize-space()='Favourite Fruit']");
        this.lblMovie = page.locator("//div[normalize-space()='Favourite Movie']");
        this.lblNumber = page.locator("//div[normalize-space()='Favourite Number']");
        this.displayName = page.locator("//div[normalize-space()='SomeName']");
        this.displayFruit1 = page.locator("//div[normalize-space()='some fruit']");
        this.displayFruit2 = page.locator("//div[normalize-space()='Mango']");
        this.displayMovie1 = page.locator("//div[normalize-space()='The Room']");
        this.displayMovie2 = page.locator("//div[normalize-space()='V for Vendetta']");
        this.displayNumber1 = page.locator("//div[normalize-space()='BN<1234>']");
        this.displayNumber2 = page.locator("//div[normalize-space()='The last prime number']");
        this.btnLogOut = page.getByRole("button", { name: "LOGOUT" });
    }

    async fieldLableUser1() {

        await expect(this.lblName1).toBeVisible("Name");
        await expect(this.lblFruit).toBeVisible("Favourite Fruit");
        await expect(this.lblMovie).toBeVisible("Favourite Movie");
        await expect(this.lblNumber).toBeVisible("Favourite Number");

    }

    async fieldLableUser2() {

        await expect(this.lblName2).toBeVisible("Name");
        await expect(this.lblFruit).toBeVisible("Favourite Fruit");
        await expect(this.lblMovie).toBeVisible("Favourite Movie");
        await expect(this.lblNumber).toBeVisible("Favourite Number");

    }

    async userInfo1() {

        await expect(this.displayName).toBeVisible("SomeName");
        await expect(this.displayFruit1).toBeVisible("some fruit");
        await expect(this.displayMovie1).toBeVisible("The Room");
        await expect(this.displayNumber1).toBeVisible("BN<1234>");

    }

    async userInfo2() {

        await expect(this.displayFruit2).toBeVisible("Mango");
        await expect(this.displayMovie2).toBeVisible("V for Vendetta");
        await expect(this.displayNumber2).toBeVisible("The last prime number");

    }

    async logOut() {

        await this.btnLogOut.click();

    }

}

export default ProfilePage;