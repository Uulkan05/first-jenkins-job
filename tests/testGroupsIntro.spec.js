import { test } from '@playwright/test';

test.describe("My test Suite", () => {
    test.beforeAll(async () => {
        console.log("Before All is executed");
    });

    test.afterAll(async () => {
        console.log("After All is executed");
    });

    test.beforeEach(async () => {
        console.log("Before Each is executed");
    });

    test.afterEach(async () => {
        console.log("After Each is executed");
    });

	test('Test Case 1', async () => {
		console.log("Test Case 1 is executed");
	});

    test("Test Case 2", async () => {
      console.log("Test Case 2 is executed");
    });


    test("Test Case 3", async () => {
      console.log("Test Case 3 is executed");
    });

     test("Test Case 4", async () => {
       console.log("Test Case 4 is executed");
     });


});
