// import { browser, $, expect } from '@wdio/globals'

describe('Attendance App', () => {
    it('should login and mark attendance', async () => {
        // 1. Open login page
        await browser.url('https://employee.srchoutsoftware.com/employee/login')
        await browser.pause(2000)

        // 2. Enter YOUR OWN email
        const emailInput = await $('[name="email"]')
        await emailInput.setValue('arshdeep@srchoutsoftware.com')

        // 3. Enter YOUR OWN password
        const passwordInput = await $('[name="password"]') 
        await passwordInput.setValue('Arshdeep@8595237548')

        // 4. Click login button
        const loginButton = await $('button[type="submit"]')
        await loginButton.click()

        // 5. Mark attendance button
        const markAttendanceButton = await $('/html/body/div[1]/div[1]/div/ul/li[2]/a/p')
        await markAttendanceButton.click()

        // 6. Add Attendance button
        const addAttendanceButton = await $('button=Add Attandance')   // by visible text
        await addAttendanceButton.click()

        // 7. Wait for the popup 'Mark' button to appear
        const markButton = await $('=Mark')
        await markButton.waitForDisplayed({ timeout: 5000 })
        await markButton.click()






       
    })
})
