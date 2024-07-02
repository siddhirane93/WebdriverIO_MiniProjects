import { Given, When, Then } from '@wdio/cucumber-framework';
//import { expect, $ } from '@wdio/globals'

import Profile from '../pageobjects/profilePageDownload';
//import SecurePage from '../pageobjects/secure.page';

// ProjRohansProfile

Given(/^I open my profile$/, async () => {
    await Profile.openProfile();
    browser.maximizeWindow();
    await browser.pause(3000);
});



When(/^I am on my landing page$/, async() => {
    
    await browser.pause(3000);
});

Then(/^I should be able to download resume$/, async () => {
    await Profile.techProfile();
    await browser.pause(3000);
});
