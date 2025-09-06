const { test, expect } = require("@playwright/test");

test.describe("GET Method", () => {

    test("Should Return Body 'Backend API'", async ({ request }) => {

        const response = await request.get("http://localhost:9999/");
        const body = await response.text();
        console.log('Body:', body);
        expect(response.status()).toBe(200);
        expect(body).toContain("Backend API");

    })

})

test.describe("POST Method", () => {

    test("Should Create User 1 and Store Data", async ({ request }) => {

        const response = await request.post("http://localhost:9999/user", {
            data: {
                username: "demo_user1",
                name: "Demo User 1",
                password: "demo321!",
                favouriteFruit: "Lemon",
                favouriteMovie: "F1",
                favouriteNumber: 41
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(body).toContain("Account Created");

    })

    test("Should Create User 2 and Store Data", async ({ request }) => {

        const response = await request.post("http://localhost:9999/user", {
            data: {
                username: "demo_user2",
                name: "Demo User 2",
                password: "demo321!",
                favouriteFruit: "Banana",
                favouriteMovie: "Bullet Train",
                favouriteNumber: 42
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(body).toContain("Account Created");

    })

    test("Should Return Already Exists When User Name is Taken", async ({ request }) => {

        const response = await request.post("http://localhost:9999/user", {
            data: {
                username: "demo_user1",
                name: "Demo User",
                password: "demo321!",
                favouriteFruit: "Lemon",
                favouriteMovie: "F1",
                favouriteNumber: 41
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(body).toContain("Account Already Exists");

    })

    test("Should Return 400 When Required Fields are Missing", async ({ request }) => {

        const response = await request.post("http://localhost:9999/user", {
            data: {
                username: "demo_user2",
                name: "Demo User 2",
                favouriteNumber: 42
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(response.status()).toBe(400);

    })

})

test.describe("PUT Method", () => {

    test("Should Update Existing Users Info", async ({ request }) => {

        const response = await request.put("http://localhost:9999/user", {
            data: {
                username: "demo_user1",
                name: "Updated Demo User",
                password: "demo321!",
                favouriteFruit: "Apple",
                favouriteNumber: 41
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(response.status()).toBe(200);
        expect(body).toContain("Account Updated");

    })

    test("Should Fail to Update Non-Existing Users Info", async ({ request }) => {

        const response = await request.put("http://localhost:9999/user", {
            data: {
                username: "test_user1",
                name: "Updated Test User",
                password: "test321!",
                favouriteNumber: 41
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(body).toContain("Account Does NOT Exist");

    })

})

test.describe("DELETE Method", () => {

    test("Should Delete Existing User From Storage", async ({ request }) => {

        const response = await request.delete("http://localhost:9999/user", {
            data: {
                username: "demo_user2"
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(response.status()).toBe(200);
        expect(body).toContain("Account Deleted");

    })

    test("Should Fail to Delete Non-Existing User From Storage", async ({ request }) => {

        const response = await request.delete("http://localhost:9999/user", {
            data: {
                username: "demo_user2"
            },
            headers: {
                "Accept": "application/json"
            }

        })
        const body = await response.text();
        console.log('Body:', body);
        expect(body).toContain("Account Does Not Exist");

    })

})