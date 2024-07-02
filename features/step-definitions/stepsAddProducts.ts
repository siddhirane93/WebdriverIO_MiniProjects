import { Given, When, Then } from '@wdio/cucumber-framework';
//import { expect, $ } from '@wdio/globals'

import AddProducts from '../pageobjects/addProducts';
//import SecurePage from '../pageobjects/secure.page';

/* ProjRohansProfile

Given(/^I open my profile$/, async () => {
    await LoginPage.open();
    browser.maximizeWindow();
    await browser.pause(3000);
});



When(/^I am on my landing page$/, async() => {
    
    await browser.pause(3000);
});

Then(/^I should be able to download resume$/, async () => {
    await LoginPage.techProfile();
    await browser.pause(3000);
});
*/

Given(/^I go to Flipkart/, async () => {
    await AddProducts.openFlipkart();
    browser.maximizeWindow();
    await browser.pause(3000);
});



//When(/^I search for a +(.*)$/, async(productName) => {
When(/^I search for a product$/, async() => {

    await browser.pause(1000);
    await AddProducts.addFirst();
});

Then(/^I should be able to add it 5 times$/, async () => {
    await browser.pause(1000);
    await AddProducts.addMoreProducts();

});

Then(/^I should be able to remove all items$/, async () => {
    await browser.pause(1000);
    await AddProducts.removeAllProducts();

});