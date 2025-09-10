describe('Attendance App', () => {
    // Store multiple login credentials
    const credentials = [
        { email: 'arshdeep@srchoutsoftware.com', password: 'Arshdeep@8595237548' },
        { email: 'testuser1@srchoutsoftware.com', password: 'TestPass@123' },
        { email: 'testuser2@srchoutsoftware.com', password: 'AnotherPass@456' }
    ];

    credentials.forEach(({ email, password }) => {
        it(`should login and mark attendance for user: ${email}`, async () => {
            // 1. Open login page
            await browser.url('https://employee.srchoutsoftware.com/employee/login');
            await browser.pause(2000);

            // 2. Enter email
            const emailInput = await $('[name="email"]');
            await emailInput.setValue(email);

            // 3. Enter password
            const passwordInput = await $('[name="password"]');
            await passwordInput.setValue(password);

            // 4. Click login button
            const loginButton = await $('button[type="submit"]');
            await loginButton.click();

            // 5. Click on attendance menu
            const markAttendanceButton = await $('/html/body/div[1]/div[1]/div/ul/li[2]/a/p');
            await markAttendanceButton.click();

            // 6. Click Add Attendance button
            const addAttendanceButton = await $('button=Add Attandance'); // by visible text
            await addAttendanceButton.click();

            // 7. Wait for the popup 'Mark' button to appear
            const markButton = await $('=Mark');
            await markButton.waitForDisplayed({ timeout: 5000 });
            await markButton.click();

            // (Optional) Verify successful attendance marking
            const successMsg = await $('//*[contains(text(),"Attendance marked successfully")]');
            await expect(successMsg).toBeDisplayed();
        });
    });
});
