import { $ } from '@wdio/globals'
import Page from './page';

/**
 * This code is correct not being used by this projectFlipkart as we are not performing any login operation
 */
class Youtube extends Page {
    
     
    public get goToLogin(){
        return $('//span[contains(text(),"Login")])]');
    }


    public get inputUsername () {
        return $('#ap_email');
    }

    public get butContinueLogin () {
        return $('//span[contains(text(),"Continue")]');
    }

    public get inputPassword () {
        return $('#ap_password');
    }

    public get btnSubmit () {
        return $('#signInSubmit');
    }

    /*
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
    */
    public async login (username: string, password: string) {
        
        await this.goToLogin.click();
        await this.inputUsername.setValue(username);
        (await this.butContinueLogin).click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
    } 

    /**
     * overwrite specific options to adapt it to page object
     
    public async techProfile(){
        await browser.pause(1000);
        const elem1 = await this.scrollDownPage;
        await elem1.scrollIntoView();
    // center element within the viewport
        await elem1.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(2000);
        await this.clickExperience.click();
        await browser.pause(2000);
        const elem2 = await this.downloadResume;
        await elem2.scrollIntoView();
       // await elem1.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(2000);
        await this.downloadResume.waitForClickable();
        await this.downloadResume.click();
        await browser.pause(2000);
    }*/
    public openYoutube () {
        return super.openYoutube();
    }
}

export default new Youtube();
